<template>
  <div class="main">
    <header>
      <el-button @click="routerPush('/login')" v-if="!isLogin">登录</el-button>
      <el-button @click="logout" v-if="isLogin">退出</el-button>
      <el-button @click="routerPush('/home')">home</el-button>
      <el-button @click="$router.push('/about')">about</el-button>
    </header>
    <!-- keep-alive 有坑 asyncData 触发 ajax 请求 返回数据 不会更新视图 -->
    <nuxt />
    <footer>底部</footer>
  </div>
</template>

<script>
import commonMixin from '@/utils/mixin'
import { ACCESSTOKEN } from '@/utils/cookiesUtils'
export default {
  name: 'commonLayout',
  mixins: [commonMixin],
  key(route) {
    return route.fullPath
  },
  watchQuery: true,
  methods: {
    logout() {
      this.commit('user/LOGOUT')
      this.clearToken(ACCESSTOKEN)
    }
  }
}
</script>

<style scoped lang="less">
</style>