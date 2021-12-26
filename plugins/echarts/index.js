import Vue from "vue";
import * as echarts from "echarts"; // 引入echarts
Vue.prototype.$echarts = echarts; // 引入组件（将echarts注册为全局）
// process.server ? undefined : (window.echarts = echarts);
