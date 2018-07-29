<template>
  <header class="nav-header">
    <div class="logo">
      <a href="">
        <img class="logo" src="../assets/image/logo.jpg" alt="">
      </a>
    </div>
    <div class="user">
      <div class="user-info">
        <p class="user-name">大侠</p>
        <p class="exit">退出</p>
        <i class="iconfont icon-cart">&#xe673;</i>
      </div>
      <p class="login" @click="panelShow=true">登录</p>
    </div>
    <div class="login-bg-panel" v-show="panelShow">
      <div class="login-page">
        <span class="iconfont close" @click="panelShow=false">&#xe67f;</span>
        <h2>登录</h2>
        <div class="errTips" v-show="errTips">
          <span class="iconfont">&#xe674;</span>
          <span class="err">用户名或密码错误</span>
        </div>
        <ul class="login-infor">
          <li class="infor-item">
            <span class="iconfont">&#xe671;</span>
            <input type="text" placeholder="用户名" v-model="userName">
          </li>
          <li class="infor-item">
            <span class="iconfont">&#xe603;</span>
            <input type="password" placeholder="密码" v-model="passWord">
          </li>
          <li class="infor-item button">
            <span @click="login">登录</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NavHeader',
  data () {
    return {
      logged: true,
      panelShow: false,
      errTips: false,
      nickName: '',
      userName: '',
      passWord: ''
    }
  },
  methods: {
    checkLogin () {
      axios.get('/user/checkLogin').then((res) => {
        let data = res.data
        console.log(res)
        if (data.status === '0') {
          this.nickName = res.result.userName
        }
      })
    },
    login () {
      axios.post('/user/login', {
        userName: this.userName,
        userPwd: this.passWord
      }).then((res) => {
        let data = res.data
        if (data.status === '0') {
          this.errTips = false
          this.panelShow = false
          this.nickName = res.result.userName
          console.log(res)
        } else {
          this.errTips = true
          console.log(res)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<style>
@import '../assets/css/font.css';
.iconfont{
  font-size: 20px;
  margin-right: 8px;
}
.iconfont.close{
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.icon-cart{
  font-size: 24px;
  margin-left: 10px;
}
.nav-header{
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background:#fff;
  color: #333;
}
.logo{
  margin-left: 20px;
}
.user{
  display: flex;
  margin-right: 30px;
}
.user .login{
  cursor: pointer;
}
.user-info{
  display: flex;
  align-items:center;
}
.exit{
  padding:0 10px;
}
.login-bg-panel{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.2);
  z-index: 2;
}
.login-bg-panel .login-page{
  position: fixed;
  padding: 40px;
  width: 520px;
  height: 330px;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -200px;
  text-align: left;
  background: #fff;
  z-index: 3;
}
.errTips{
  display: flex;
  color: #d1434a;
}
.login-infor .infor-item{
  line-height: 40px;
  border: 1px solid #a1a1a1;
  margin-top: 20px;
  padding:0 10px;
}
.login-infor .infor-item input{
  border: none;
  outline: none;
  line-height: 40px;
  font-size: 16px;
}
.login-infor .infor-item.button{
  text-align: center;
  cursor: pointer;
  background: #1e90ff;
  color: #fff;
  border: 1px solid #1e90ff;
}
</style>
