const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { targets: "defaults and supports webgl and not IE 11" },
              ],
            ],
            plugins: [
              ["@babel/plugin-transform-runtime", { useESModules: true }],
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "h", pragmaFrag: "Fragment" },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
