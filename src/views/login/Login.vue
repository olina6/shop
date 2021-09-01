<template>
  <div class="wrapper">
    <img class="wrapper_img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper_input">
      <input class="wrapper_input_content"
             placeholder="example@mail.com"
             v-model="data.email"
      />
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content"
             placeholder="password"
             type="password"
             v-model="data.password"
      />
    </div>
    <div class="wrapper_login-button" @click="handleLogin"> Login </div>
    <div class="wrapper_login-link" @click="handleRegisterClick"> Register </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '@/utils/request'
export default {
  name: 'Login',
  setup () {
    const data = reactive({
      username: '',
      password: ''
    })
    const router = useRouter()
    const handleLogin = async () => {
      try {
        const result = await post('/api/user/login', {
          username: data.email,
          password: data.password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          alert('failed')
        }
      } catch (e) {
        alert('failed request')
      }
      //   .then(() => {
      //   localStorage.isLogin = true
      //   router.push({ name: 'Home' })
      // }).catch(() => {
      //   alert('failed')
      // })
    }
    const handleRegisterClick = () => {
      router.push({ name: 'Register' })
    }
    return { handleLogin, handleRegisterClick, data }
  }
}
</script>
<style lang="scss" scoped>
@import "src/style/variables.scss";
.wrapper{
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img{
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &_input{
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    &_content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder{
        color: $content-notice-fontcolor;
      } ;
    }
  }
  &_login-button{
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &_login-link{
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
