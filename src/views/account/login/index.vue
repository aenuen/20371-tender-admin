<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="off" label-position="left">
      <div class="title-container">
        <h3 class="title">管理员登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="用户名" name="username" type="text" tabindex="1" autocomplete="off" @keyup.enter.native="login" />
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="您输入的是大写" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input ref="password" v-model="loginForm.password" :type="passwordType" placeholder="密码" name="password" tabindex="2" autocomplete="off" @keyup.native="checkCapsLock" @blur="capsTooltip = false" @keyup.enter.native="login" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button :loading="submitLoading" type="primary" style="width: 100%; margin-bottom: 30px" @click.native.prevent="login"> 登录 </el-button>
    </el-form>
  </div>
</template>

<script>
// api
// components
// data
// filter
// function
// mixin
import DetailMixin from '@/components/Mixins/DetailMixin'
import MethodsMixin from '@/components/Mixins/MethodsMixin'
// plugins
import { validateUsername, validateRequire } from 'abbott-methods/import'
import { CryptoJsEncode } from '@/libs/cryptojs'
// settings
export default {
  name: 'AccountLogin',
  mixins: [DetailMixin, MethodsMixin],
  data() {
    return {
      loginRules: {
        username: [{ validator: (rule, value, callback) => validateUsername(rule, value, callback, 5, 20) }],
        password: [{ validator: (rule, value, callback) => validateRequire(rule, value, callback, '密码', 6, 20) }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      loginForm: { username: '', password: '' },
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    checkCapsLock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z'
    },
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'
      this.$nextTick(() => this.$refs.password.focus())
    },
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.submitLoadingOpen()
          const newLoginForm = {
            username: CryptoJsEncode(this.loginForm.username),
            password: CryptoJsEncode(this.loginForm.password)
          }
          this.$store
            .dispatch('user/login', newLoginForm)
            .then(() => {
              this.loading = false
              this.submitLoadingClose()
              this.routerGo(this.redirect || '/', this.otherQuery)
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') acc[cur] = query[cur]
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
@import url('../styles/common.scss');
</style>
<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
@import url('../styles/login.scss');
</style>
