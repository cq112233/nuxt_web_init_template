import appConfig from "@/app.config";
const { routerWhiteLists } = appConfig;
export default ({ app, redirect, store, req }) => {
  // 在服务端
  if (!process.client) {
    if (store.state.user.accessToken) {
      if (req.url.indexOf("/login") >= 0) {
        redirect("/");
      } else {
        redirect(req.url);
      }
    } else {
      if (routerWhiteLists.indexOf(req.url) >= 0) {
        redirect(req.url);
      } else {
        if (req.url.indexOf("/login?redirect=") >= 0) {
          redirect(req.url);
        } else {
          redirect({
            path: `/login?redirect=${req.url}`,
          });
        }
      }
    }
  }
};
