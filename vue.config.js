/*
 * @file: vue 的基础配置信息
 * @Date: 2020-09-10 15:08:48
 * @author: manyao.zhu
 */

const path = require("path");

const devTarget = "http://srm.dev.ithinkdt.com";
const testTarget = "";
const prodTarget = "";
const target =
  process.env.NODE_ENV === "production"
    ? prodTarget
    : process.env.NODE_ENV === "testing"
    ? testTarget
    : devTarget;

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: "8989",
    https: false,
    proxy: {
      "/api/v1": {
        target,
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "orange",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/css/theme.less")],
    },
  },
};
