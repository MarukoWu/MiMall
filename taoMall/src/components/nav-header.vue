<template>
  <header class="nav-header">
    <div class="logo">
      <a href="">
        <img class="logo" src="../assets/image/logo.jpg" alt="">
      </a>
    </div>
    <div class="login">
      <p>登录</p>
      <div class="user-info">
        <p class="user-name">大侠</p>
        <p class="exit">退出</p>
        <i class="iconfont icon-cart">&#xe673;</i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavHeader'
}
</script>

<style>
@import '../assets/css/font.css';
.icon-cart{
  font-size: 24px;
  margin-left:10px;
}
.nav-header{
  padding:30px 40px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  background:#fff;
}
.logo{
  margin-left: 20px;
}
.login{
  display: flex;
  margin-right: 30px;
}
.user-info{
  display: flex;
  align-items:center;
}
.exit{
  padding:0 10px;
}
</style>
