import { h, Fragment } from "preact";
import { useState, useRef } from "preact/hooks";
import { updateCss } from "./css-util";
import { decodeImage, uploadImage } from "./image-util";
import { renderImage } from "./render-image";

function ImageInput({ defaultType = "url", name }) {
  const [type, setType] = useState(defaultType);
  return (
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-btn">
          <select
            name={name + "-type"}
            class="btn"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="url">URL</option>
            <option value="file">檔案/ファイル</option>
          </select>
        </span>
        <input
          type={type}
          name={name}
          class="form-control"
          required="required"
        />
      </div>
    </div>
  );
}

function getImage(formData, name) {
  return {
    type: formData.get(name + "-type"),
    value: formData.get(name),
  };
}

function OptionsInput({ name, defaultBlur, defaultBrightness }) {
  return (
    <div class="form-group">
      <label>亮度 明るさを調整</label>
      <input
        type="range"
        name={name + "-brightness"}
        min="-100"
        max="100"
        defaultValue={defaultBrightness}
      />

      <label>模糊 ぼかし</label>
      <input
        type="range"
        name={name + "-blur"}
        min="0"
        max="1000"
        defaultValue={defaultBlur}
      />
    </div>
  );
}

function getOptions(formData, name) {
  const brightness = parseInt(formData.get(name + "-brightness")) / 100;
  const blur = parseInt(formData.get(name + "-blur")) / 100;
  const mixColor =
    brightness > 0 ? [1, 1, 1, brightness] : [0, 0, 0, -brightness];
  return { blur, mixColor };
}

function ConfigPanel({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    onSubmit({
      image: getImage(formData, "image-input"),
      options: {
        dashboard: getOptions(formData, "dashboard"),
        plurk: getOptions(formData, "plurk"),
      },
    });
  };

  return (
    <Fragment>
      <h2>Step.1 設定</h2>
      <span>先選擇你要的背景圖，設定好你喜歡的明暗透明度、模糊程度並預覽</span>
      <form onSubmit={handleSubmit}>
        <h3>背景画像選択</h3>
        <ImageInput name="image-input" />

        <h3>資訊面板黑背景 深い色の背景</h3>
        <OptionsInput
          name="dashboard"
          defaultBrightness="-50"
          defaultBlur="300"
        />

        <h3>噗文白背景 淡い色の背景</h3>
        <OptionsInput name="plurk" defaultBrightness="70" defaultBlur="300" />

        <button type="submit" class="btn btn-primary">
          預覽設定プレビュー！
        </button>
      </form>
    </Fragment>
  );
}

function Preview({ images }) {
  return (
    <Fragment>
      <h2>Step.2 預覽 プレビュー</h2>
      <div
        class="preview background-timeline"
        style={
          images ? `background-image: url(${images.timeline.objectURL})` : ""
        }
      >
        <div
          class="preview-box background-plurk"
          style={
            images ? `background-image: url(${images.plurk.objectURL})` : ""
          }
        >
          <b>千秋</b>
          <span class="say">
            <b>說</b>
          </span>
          你好，謝謝你的使用OwO
        </div>
        <div
          class="preview-box background-dashboard"
          style={
            images ? `background-image: url(${images.dashboard.objectURL})` : ""
          }
        >
          ハオ！涼風千秋です！<br /><br />
          這裡是右邊的資訊欄位
        </div>
      </div>
    </Fragment>
  );
}

function Uploader({ images, onDone }) {
  const [isUploading, setIsUploading] = useState(false);
  const canUpload = images != null && !isUploading;

  const handleClick = async () => {
    if (!canUpload) return;

    setIsUploading(true);

    try {
      const urls = {};

      await Promise.all(
        Object.keys(images).map(async (key) => {
          urls[key] = await uploadImage(images[key].blob);
        })
      );

      onDone(urls);
    } catch (err) {
      console.error(err);
      alert("上傳失敗");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        onClick={handleClick}
        disabled={!canUpload}
      >
        確認產生CSS
      </button>
      <span>
        画像をアップロードする、少々お待ちください((要等蠻久的，好了我會彈個提示
      </span>
    </Fragment>
  );
}

function Result({ css }) {
  const textarea = useRef(null);
  const handleClick = () => {
    textarea.current.select();
    document.execCommand("copy");
  };
  return (
    <Fragment>
      <h2>領取CSS</h2>
      <textarea ref={textarea} class="form-control" style="max-height: 500px">
        {css}
      </textarea>
      <button type="button" class="btn btn-default" onClick={handleClick}>
        點我複製
      </button>
      <span>コピーする！</span>
    </Fragment>
  );
}

async function fetchResource({ type, value }) {
  if (type === "url") {
    return fetch(value, { mode: "cors" }).then((res) => res.blob());
  } else if (type === "file") {
    return value;
  }
}

async function generateImages(config) {
  const sourceBlob = await fetchResource(config.image);
  const sourceImage = await decodeImage(sourceBlob);
  const blurScaling = Math.min(sourceImage.width, sourceImage.height) / 200;

  const newImages = {};
  newImages["timeline"] = {
    blob: sourceBlob,
    objectURL: URL.createObjectURL(sourceBlob),
  };
  await Promise.all(
    ["dashboard", "plurk"].map(async (key) => {
      const options = config.options[key];
      const blob = await renderImage(sourceImage, {
        ...options,
        blur: options.blur * blurScaling,
      });
      newImages[key] = { blob, objectURL: URL.createObjectURL(blob) };
    })
  );
  return newImages;
}

function disposeImages(oldImages) {
  if (oldImages == null) return;
  for (const key in oldImages) {
    URL.revokeObjectURL(oldImages[key].objectURL);
  }
}

export function App() {
  const [images, setImages] = useState(null);
  const [css, setCss] = useState("");

  const handleNewConfig = async (config) => {
    try {
      setCss("");
      const newImages = await generateImages(config);
      setImages((oldImages) => {
        disposeImages(oldImages);
        return newImages;
      });
    } catch (err) {
      console.error(err);
      alert(`失敗：錯誤${err}`);
    }
  };

  const handleUploadDone = async (urls) => {
    setCss(updateCss(css, urls));
  };

  return (
    <div class="container">
      <h1>
        Tokyono Sora 模糊背景產生器 <small>beta</small>
      </h1>

      <hr />

      <div class="row">
        <div class="col-md-6">
          <ConfigPanel onSubmit={handleNewConfig} />
        </div>
        <div class="col-md-6">
          <Preview images={images} />
          <Uploader images={images} onDone={handleUploadDone} />
          <Result css={css} />

          <a
            href="https://www.plurk.com/akira02/invite/4"
            class="btn btn-outline-danger"
            role="button"
          >
            喜歡請追蹤千秋的噗浪&lt;3
            <br />
            フォローしてください
          </a>
        </div>
      </div>
    </div>
  );
}
