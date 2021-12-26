<template>
  <div class="">
    <div>{{ error.message + error.statusCode }}</div>
    <button @click="$router.push('/')">返回首页</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: ['error'],
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style scoped></style>
