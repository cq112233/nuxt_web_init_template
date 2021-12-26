<template>
  <div class="login">
    <el-tabs v-model="activeName" type="card" stretch>
      <el-tab-pane label="登入" name="login">
        <el-form>
          <el-form-item>
            <el-input placeholder="请输入用户号" v-model="formData.user">
              <template slot="prepend">用户号</template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" v-model="formData.password">
              <template slot="prepend">密码</template>
            </el-input>
          </el-form-item>
          <el-form-item :style="{ textAlign: 'center' }">
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">注册</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import commonMixin from '@/utils/mixin'
import { ACCESSTOKEN } from '@/utils/cookiesUtils'
export default {
  name: 'login',
  mixins: [commonMixin],
  layout: 'common',
  transition: 'test',
  data() {
    return {
      activeName: 'login',
      formData: {
        user: '',
        password: ''
      },
      role: 1 // 1 admin 2 em
    }
  },
  asyncData() {
    return {}
  },
  methods: {
    changeRole() {
      if (this.role === 1) {
        this.role = 2
      } else {
        this.role = 1
      }
    },
    onSubmit() {
      setTimeout(() => {
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax'
        }
        this.$store.commit('user/LOGIN', auth.accessToken)
        this.setToken(ACCESSTOKEN, auth.accessToken)
        if (this.$route.query.redirect) {
          this.routerReplace(this.$route.query.redirect)
        } else {
          this.routerReplace('/')
        }
      }, 500)
    }
  }
}
</script>

<style scoped>
.test-enter-active,
.test-leave-active {
  transition: all ease 0.5s;
}
.test-enter,
.test-leave-active {
  margin-left: -1000px;
}
</style>
<style lang="less" scoped>
.login {
  width: 50%;
  height: 50vh;
  // position: absolute;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // margin: auto;
}
</style>
