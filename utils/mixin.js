import * as totalUtils from "./index";
const totalUtilsCopy = Object.assign({}, totalUtils);
for (const key in totalUtilsCopy) {
  if (Object.hasOwnProperty.call(totalUtilsCopy, key)) {
    const element = totalUtilsCopy[key];
    if (typeof element === "string") {
      Reflect.deleteProperty(totalUtilsCopy, key);
    }
  }
}
import { mapState } from "vuex";
export const commonMixin = {
  // 防小程序钩子方法
  beforeMount() {
    this.$dayjs.locale(this.$store.state.app.lang);
  },
  mounted() {
    this.$options.onReady && this.$options.onReady.call(this);
    this.$options.onLoad && this.$options.onLoad.call(this);
  },
  activated() {
    this.$options.onShow && this.$options.onShow.call(this);
  },
  deactivated() {
    this.$options.onHide && this.$options.onHide.call(this);
  },
  destroyed() {
    this.$options.onUnload && this.$options.onUnload.call(this);
  },
  // 清除定时器
  beforeRouteLeave(to, from, next) {
    next();
  },
  computed: {
    ...mapState({
      isLogin: (state) => !!state.user.accessToken,
    }),
  },
  methods: {
    // 工具方法挂载vue实例中
    ...totalUtilsCopy,
    // 代理vueRouter
    routerPush() {
      this.$router.push(...arguments);
    },
    routerReplace() {
      this.$router.replace(...arguments);
    },
    routerGo() {
      this.$router.go(...arguments);
    },
    routerBack() {
      this.$router.back();
    },
    // 代理vueX
    commit() {
      this.$store.commit(...arguments);
    },
    dispatch() {
      return this.$store.dispatch(...arguments);
    },
    // head 自定义 利于seo
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{ name: "des", content }].concat(payload),
      };
    },
  },
};

export default commonMixin;
