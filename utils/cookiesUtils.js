export const ACCESSTOKEN = "ACCESS_TOKEN";
export const LANG = "NUXT_LANG";
// 这里要兼容 服务器端渲染
// 设置cookies 中的 token;
export function setToken(key, value, app = undefined) {
  process.client ? this.$cookies.set(key, value) : app.$cookies.set(key, value);
}
// 获取cookies 中的 token;
export function getToken(key, app = undefined) {
  let data = process.client ? this.$cookies.get(key) : app.$cookies.get(key);
  return data;
}
// 清除cookies 中的 token;
export function clearToken(key, app = undefined) {
  let data = process.client
    ? this.$cookies.remove(key)
    : app.$cookies.remove(key);
  return data;
}

export default {
  setToken,
  getToken,
  clearToken,
};
