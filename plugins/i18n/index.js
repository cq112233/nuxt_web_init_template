import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "@/assets/languages/enLocale";
import zhLocale from "@/assets/languages/zhLocale";
import enUS from "element-ui/lib/locale/lang/en";
import zhCN from "element-ui/lib/locale/lang/zh-CN";
import ElementLocale from "element-ui/lib/locale";
Vue.use(VueI18n);
const messages = {
  en: {
    ...enUS,
    ...enLocale,
  },
  zh: {
    ...zhCN,
    ...zhLocale,
  },
};
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.app.lang,
    messages,
  });
  ElementLocale.i18n((key, value) => app.i18n.t(key, value));
};
