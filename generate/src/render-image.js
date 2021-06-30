import { generateShaders } from "./shaders";

// prettier-ignore
const rectangleData = new Float32Array([
  -1.0,  1.0,
  -1.0, -1.0,
   1.0,  1.0,
   1.0,  1.0,
  -1.0, -1.0,
   1.0, -1.0,
]);

export function renderImage(image, options) {
  const { width, height } = image;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const gl = canvas.getContext("webgl", { depth: false, antialias: false });
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

  const rectangleBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, rectangleBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, rectangleData, gl.STATIC_DRAW);

  const imageTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, imageTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

  const fbTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, fbTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    width,
    height,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    null
  );

  const fb = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    fbTexture,
    0
  );

  const [vsSource, fsSource] = generateShaders(options);

  const vs = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vs, vsSource);
  compileShader(gl, vs);

  const fs = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fs, fsSource);
  compileShader(gl, fs);

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  linkProgram(gl, program);
  gl.useProgram(program);

  const aPosition = gl.getAttribLocation(program, "a_position");
  const uTexture = gl.getUniformLocation(program, "u_texture");
  const uShape = gl.getUniformLocation(program, "u_shape");
  const uBlurDirection = gl.getUniformLocation(program, "u_blurDirection");
  const uMixColor = gl.getUniformLocation(program, "u_mixColor");

  const blurDirectionX = [1, 0];
  const blurDirectionY = [0, 1];

  gl.enableVertexAttribArray(aPosition);
  gl.bindBuffer(gl.ARRAY_BUFFER, rectangleBuffer);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  gl.activeTexture(gl.TEXTURE0);
  gl.uniform1i(uTexture, 0);
  gl.uniform2fv(uShape, [width, height]);

  // first pass
  gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
  gl.bindTexture(gl.TEXTURE_2D, imageTexture);
  gl.uniform2fv(uBlurDirection, blurDirectionX);
  gl.uniform4fv(uMixColor, [0, 0, 0, 0]);
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  // second pass
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, fbTexture);
  gl.uniform2fv(uBlurDirection, blurDirectionY);
  gl.uniform4fv(uMixColor, options.mixColor);
  gl.drawArrays(gl.TRIANGLES, 0, 6);

  return new Promise((resolve) => {
    canvas.toBlob(resolve, "image/jpeg");
  });
}

function compileShader(gl, shader) {
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

function linkProgram(gl, program) {
  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    throw new Error(gl.getProgramInfoLog(program));
  }
  return program;
}
