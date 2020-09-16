/*
 * @file: 项目的入口（主要配置）
 * @Date: 2020-09-04 14:00:37
 * @author: manyao.zhu
 */
import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

// ant-design-vue 的全局引入 (全局主题样式一点引用less全局配置，就不能和按需加载的插件一起使用)
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css";
import "ant-design-vue/dist/antd.less";
Vue.use(Antd);

// 局部加载， 这里需要修改babel.config.js配置信息
// import { Button, message } from "ant-design-vue";
// Vue.use(Button);
// Vue.prototype.$message = message;

// 加载使用第三方插件的工具
import "./shared/utils/loading-plugin.util";

// 引入路由
import router from "./router";
import store from "./store";

// 自定义全局工具
import "./shared/utils/router-jump.util";
import "./shared/utils/automatic-logon-component.util";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
