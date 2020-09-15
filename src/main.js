/*
 * @file: 项目的入口（主要配置）
 * @Date: 2020-09-04 14:00:37
 * @author: manyao.zhu
 */
import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

// ant-design-vue 的全局引入
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.min.css";
// Vue.use(Antd);

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
