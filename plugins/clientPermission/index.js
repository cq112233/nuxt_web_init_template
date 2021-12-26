import appConfig from "@/app.config";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
}); // 不显示转圈
const { routerWhiteLists } = appConfig;
export default ({ app, redirect, store, $loading }) => {
  // 客户端拦截
  if (process.client) {
    const { router } = app;
    router.beforeEach(async (to, from, next) => {
      // 客户端来拦截
      NProgress.start();
      if (store.state.user.accessToken) {
        if (to.path === "/login") {
          NProgress.done();
          redirect("/");
        } else {
          next();
        }
      } else {
        if (to.path === "/login") {
          next();
        } else {
          if (routerWhiteLists.indexOf(to.path) >= 0) {
            next();
          } else {
            redirect({
              path: `/login?redirect=${to.path}`,
            });
          }
        }
      }
    });

    router.afterEach(() => {
      NProgress.done();
    });
  }
};
