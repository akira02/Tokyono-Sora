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
      <label>亮度 Brightness</label>
      <input
        type="range"
        name={name + "-brightness"}
        min="-100"
        max="100"
        defaultValue={defaultBrightness}
      />

      <label>模糊 Blur</label>
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

        <h3>模糊與透明程度調整</h3>
        <OptionsInput name="plurk" defaultBrightness="80" defaultBlur="500" />

        <h2>Step.2 預覽</h2>
        <span>暫不支援即時預覽，更改數值之後要再點一次計算模糊圖片喔</span>
        <button type="submit" class="btn btn-primary">
          計算Preview
        </button>
      </form>
    </Fragment>
  );
}

function Preview({ images }) {
  return (
    <Fragment>
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
          <br/>
          你好，謝謝你的使用OwO
        </div>
        <div
          class="preview-box background-plurk"
          style={
            images ? `background-image: url(${images.plurk.objectURL})` : ""
          }
        >
          <b style="color:#63C6D3;">涼風青葉</b>
          <span class="say">
            <b>說</b>
          </span>
          <br/>
          這是淺色暱稱的狀況
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
      <h2>Step.3 上傳圖片</h2>
      <button
        type="button"
        class="btn btn-primary"
        onClick={handleClick}
        disabled={!canUpload}
      >
        上傳產生CSS
      </button>
      <br/>
      <span>
        要等蠻久的，好了我會彈個提示 <br/>Please wait
        <br/>
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
      <textarea ref={textarea} class="form-control" style="max-height: 500px">
        {css}
      </textarea>
      <button type="button" class="btn btn-default" onClick={handleClick}>
        點我複製
      </button>
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
    ["plurk"].map(async (key) => {
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
    <div
      class="root"
      style={
        images ? `background-image: url(${images.timeline.objectURL})` : ""
      }
    >
      <div
        class="container"
        style={images ? `background-image: url(${images.plurk.objectURL})` : ""}
      >
        <h1>
          Tokyono Sora 噗文模糊背景產生器 <small>beta</small>
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
            <a
              href="https://www.plurk.com/egg820/invite/4"
              class="btn btn-outline-danger"
              role="button"
            >
              技術支援
              <br />
              欸個
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
