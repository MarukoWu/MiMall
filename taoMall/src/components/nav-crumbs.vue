<template>
  <section class="nav-crumbs">
    <div class="crumbs">
      <a href="">主页</a>
      <span>/</span>
      <router-link to="/cart">购物车</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavCrumbs'
}
</script>

<style>
.nav-crumbs{
  padding:30px 40px 30px 60px;
  color: #a1a1a1;
}
.crumbs{
  font-size: 14px;
  text-align: left;
  color: #a1a1a1;
}
.crumbs a:hover{
  color:#d1434a;
}
</style>
