/*
 * @file: vuex store
 * @Date: 2020-09-11 14:37:51
 * @author: manyao.zhu
 */
import Vue from "vue";
import Vuex from "vuex";

import module from "./module";
import getter from "./getters";

Vue.use(Vuex);

const state = {};

const getters = {};

const actions = {};

const mutations = {};

console.log(module);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters: Object.assign({}, getters, getter),
  modules: module,
  strict: false,
  plugins: [],
});
