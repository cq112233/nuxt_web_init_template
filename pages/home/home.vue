<template>
  <div class="container">
    <!-- <div :style="{ width: '750px', background: 'red' }">111</div> -->
    <div class="test1">222,添加了router</div>
    <h3>首页</h3>

    <div>
      <div>当前语言</div>
      <el-radio-group v-model="lang" @change="changLang">
        <el-radio label="en">英语</el-radio>
        <el-radio label="zh">中文</el-radio>
      </el-radio-group>
    </div>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      >
      </el-date-picker>
    </div>
    <div class="test">
      <el-button @click="routerPush({ path: '/', query: { id: 1 } })" v-drag>改变参数</el-button>
      <div>{{ months }}</div>
    </div>
    <lineChart />
    <!-- <div v-directive1="'red'">自定义指令</div> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import commonMixin from '@/utils/mixin'
import { LANG } from '@/utils/cookiesUtils'
import { getName } from '@/apis'
import lineChart from '@/components/common/lineChart'
export default {
  layout: 'common',
  mixins: [commonMixin],
  components: {
    lineChart
  },
  watchQuery: true,
  //第二步 中间件钩子
  middleware() {},
  validate({ params, query }) {
    return true
  },
  //异步业务逻辑,读取服务器数据
  async asyncData(context) {
    if (process.client) return
    const { app, $axios, $dayjs, $request } = context
    //获取同域名下的内容
    try {
      let b = await getName('/users/api')
      b = b.data.token + Math.random()
      return {
        b,
        months: $dayjs.months()
      }
    } catch (error) {
      console.log(error)
    }
  },
  //第四步 读取数据,返回vuex
  async fetch({ store, $axios }) {},
  data() {
    return {
      value1: '',
      lang: this.$store.state.app.lang,
      months: []
    }
  },
  computed: {
    ...mapState({
      storeLang: (state) => state.app.lang
    })
  },
  methods: {
    // 语言
    changLang(lang) {
      this.$store.commit('app/SET_LANG', lang)
      this.$i18n.locale = this.storeLang
      this.setToken(LANG, this.storeLang)
      this.$dayjs.locale(this.storeLang)
      this.months = this.$dayjs.months()
    }
  },

  //csr  vue6大钩子
  beforeMount() {},
  async mounted() {
    try {
      let c = await getName('/users/api')
      console.log(c, 'c')
    } catch (error) {}
  },
  //服务端渲染 不能存在 激活 和 失效激活 钩子
  activated() {},
  deactivated() {}
}
</script>

<style lang='less' scoped>
.test {
  .display-column-center();
}
.test1 {
  width: 750px;
  background: forestgreen;
}
</style>
