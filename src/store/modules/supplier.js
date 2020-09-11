/*
 * @file:
 * @Date: 2020-09-11 14:43:34
 * @author: manyao.zhu
 */
const state = {
  title: "张三",
};

const mutations = {
  SET_NAME(state, title) {
    state.title = title;
  },
};

const actions = {
  setName({ commit }, { title, cb }) {
    commit("SET_NAME", title);
    cb();
  },
};

export default {
  state,
  mutations,
  actions,
};
