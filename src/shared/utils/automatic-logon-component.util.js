/*
 * @file: 自动注册全局组件
 * @Date: 2020-09-10 18:07:50
 * @author: manyao.zhu
 */
import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "../../baseComponents/",
  true,
  /\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const name = fileName.split("/").pop();
  const componentName = upperFirst(camelCase(name.replace(/\.\w+$/, "")));
  Vue.component(
    // 全局注册组件
    componentName,
    componentConfig.default || componentConfig
  );
});
