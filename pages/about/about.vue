<template>
  <div>
    <el-button @click="$router.push('/home')">首页</el-button>
    about
  </div>
</template>

<script>
import commonMixin from '@/utils/mixin'
export default {
  mixins: [commonMixin],
  head() {
    return this.$seo('reg', 'hellow reg')
  }
}
</script>

<style>
</style>