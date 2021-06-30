import { erf } from "./erf";

function pixelWeight(x, stddev) {
  const y1 = erf((x - 0.5) / (stddev * Math.SQRT2));
  const y2 = erf((x + 0.5) / (stddev * Math.SQRT2));
  return (y2 - y1) / 2;
}

function generateSamplePoints(stddev) {
  const result = [];
  result.push({ offset: 0, weight: pixelWeight(0, stddev) });

  const radius = Math.ceil(stddev * 3);
  for (let i = 1; i <= radius; i += 2) {
    const w1 = pixelWeight(i, stddev);
    const w2 = pixelWeight(i + 1, stddev);
    const offset = (w1 * i + w2 * (i + 1)) / (w1 + w2);
    const weight = w1 + w2;

    result.push({ offset, weight });
    result.push({ offset: -offset, weight });
  }
  return result;
}

export function generateShaders(options) {
  const samplePoints = generateSamplePoints(options.blur);
  const vs = `
    precision highp float;
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;
  const generateTextureRead = ({ offset, weight }) => {
    const position = `(gl_FragCoord.xy + u_blurDirection * ${offset.toExponential()}) / u_shape`;
    return `gl_FragColor += texture2D(u_texture, ${position}) * ${weight.toExponential()};`;
  };
  const fs = `
    precision mediump float;
    uniform sampler2D u_texture;
    uniform highp vec2 u_shape;
    uniform highp vec2 u_blurDirection;
    uniform vec4 u_mixColor;
    void main() {
      gl_FragColor = vec4(0.0);
      ${samplePoints.map(generateTextureRead).join("\n")}
      gl_FragColor = vec4(mix(gl_FragColor.rgb, u_mixColor.rgb, u_mixColor.a), 1.0);
    }
  `;
  return [vs, fs];
}
