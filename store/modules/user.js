const state = () => {
  return {
    accessToken: null,
  };
};

const mutations = {
  // 登录
  LOGIN(state, payload) {
    state.accessToken = payload;
  },
  // 退出
  LOGOUT(state) {
    state.accessToken = null;
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
