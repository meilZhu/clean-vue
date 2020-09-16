/*
 * @file: babel-loader的配置信息
 * @Date: 2020-09-10 21:54:18
 * @author: manyao.zhu
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"], // "@vue/app"
  plugins: [
    [
      "import",
      // { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }, // 这个是按需加载
      { libraryName: "Antd", libraryDirectory: "es", style: true }, // 全局加载
    ],
  ],
};
