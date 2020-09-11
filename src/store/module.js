/*
 * @file: vuex 的模块module集中处理
 * @Date: 2020-09-11 14:40:15
 * @author: manyao.zhu
 */
const vuexModules = require.context("./modules", false, /\.js$/);

console.log(vuexModules);
const module = {};

vuexModules.keys().forEach((fileName) => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, "");
  module[moduleName] = {
    namespaced: true,
    ...vuexModules(fileName).default,
  };
});

export default module;
