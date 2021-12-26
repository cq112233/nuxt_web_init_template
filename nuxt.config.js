import pageRoutes from "./router/pageRoutes";
export default {
  server:{
    host: "0.0.0.0",
    port: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-web-template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  router: {
    middleware: ["serverPermission"],
    extendRoutes(routes, resolve) {
      routes.splice(0);
      routes.push(...pageRoutes(resolve));
    },
  },
  // 自定义全局样式
  styleResources: {
    less: ["./assets/css/custom.less"],
  },
  axios: {
    // baseUrl:'http://localhost:3002',
    proxy: true, //开启跨域
    // prefix:'/index'
  },
  proxy: {
    "/users": {
      target: "http://localhost:3001", //代理目标地址
      changeOrigin: true,
      // pathRewrite: {
      //   "^/users": "/users",
      // },
    },
  },
  loading: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", "~/assets/css/init.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/axios/request",
      ssr: true,
    },
    {
      src: "@/plugins/element",
      ssr: true,
    },
    "@/plugins/i18n",
    {
      src: "@/plugins/clientPermission",
      ssr: false,
    },
    {
      src: "@/plugins/directives",
      ssr: true,
    },
    {
      src: "@/plugins/echarts",
      ssr: true,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  dayjs: {
    locales: ["zh", "en"],
    // defaultLocale: "zh",
    plugins: [
      "utc", // import 'dayjs/plugin/utc'
      "localeData",
      "weekOfYear",
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "cookie-universal-nuxt",
    ["cookie-universal-nuxt", { parseJSON: true }],
    "@nuxtjs/style-resources",
    "@nuxtjs/dayjs",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // postcss: {
    //   // 添加插件名称作为键，参数作为值
    //   plugins: {
    //     "postcss-px-to-viewport": {
    //       unitToConvert: "px", // 默认值`px`，需要转换的单位
    //       viewportWidth: 750, // 视窗的宽度,对应设计稿宽度
    //       // viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
    //       unitPrecision: 6, // 指定`px`转换为视窗单位值的小数位数
    //       propList: ["*"], // 转化为vw的属性列表
    //       viewportUnit: "vw", // 指定需要转换成视窗单位
    //       fontViewportUnit: "vw", // 字体使用的视窗单位
    //       selectorBlaskList: [".ignore-"], // 指定不需要转换为视窗单位的类
    //       mediaQuery: false, // 允许在媒体查询中转换`px`
    //       minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
    //       replace: true, // 是否直接更换属性值而不添加备用属性
    //       exclude: [/element-ui/], // 忽略某些文件夹下的文件或特定文件
    //       landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
    //       landscapeUnit: "vw", // 横屏时使用的单位
    //       landscapeWidth: 1134, // 横屏时使用的视窗宽度
    //     },
    //   },
    //   preset: {
    //     // 更改postcss-preset-env 设置
    //     autoprefixer: {},
    //   },
    // },
    extend(config, ctx) {},
  },
};
