import config from "@/app.config";
// namespaced: true,
const state = () => {
  return {
    version: config.version, // 版本
    lang: null, // 语言
  };
};

const mutations = {
  SET_LANG(state, payload) {
    state.lang = payload;
  },
};
const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
