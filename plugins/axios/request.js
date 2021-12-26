export let request;
// 创建axios实例函数
function createInstanceGenerator($axios, request) {
  if (request) return request;
  const instance = $axios.create({
    //  这里也是个坑   服务器端设置'/' 服务器访问的是http://localhost:80 端口
    // baseURL: process.server ? "http://localhost:3000" : "/",
    timeout: 6000, // 最多6秒
  });
  instance.onRequest((config) => {
    return config;
  });
  instance.onResponse((config) => {
    return config;
  });
  instance.onError((err) => {
    throw err;
  });
  return instance;
}
export default ({ route, params, query, $axios, app, store }, inject) => {
  request = createInstanceGenerator($axios, request);
  inject("request", request);
};
