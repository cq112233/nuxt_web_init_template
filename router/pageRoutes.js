export default function (resolve) {
  return [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      meta: {
        title: "首页",
        // keepAlive: true
      },
      component: resolve(__dirname, "../pages/home/home"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "关于",
        // keepAlive: true
      },
      component: resolve(__dirname, "../pages/about/about"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录",
        // keepAlive: true
      },
      component: resolve(__dirname, "../pages/login/login"),
    },
    {
      path: "/*",
      name: "404",
      meta: {
        title: "404",
        // keepAlive: true
      },
      component: resolve(__dirname, "../pages/404/404"),
    },
  ];
}
