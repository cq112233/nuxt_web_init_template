import user from "./modules/user";
import app from "./modules/app";
import Vuex from "vuex";
import { getToken } from "@/utils";
import { ACCESSTOKEN, LANG } from "@/utils/cookiesUtils";
export let store;
const initStore = () =>
  store ||
  (store = new Vuex.Store({
    modules: {
      user,
      app,
    },
    actions: {
      nuxtServerInit({ commit }, {$dayjs ,app, req }) {
        // 语言
        let lang = null;
        // 身份鉴权
        let accessToken = null;
        // 是否有cookies
        if (req.headers.cookie) {
          lang = getToken(LANG, app) || "en";
          accessToken = getToken(ACCESSTOKEN, app);
        } else {
          lang = "en";
        }
        // 语言包
        app.i18n.locale = lang;
        // 时间本地化
        $dayjs.locale(lang)
        commit("app/SET_LANG", lang);
        commit("user/LOGIN", accessToken);
      },
    },
  }));

export default initStore;
