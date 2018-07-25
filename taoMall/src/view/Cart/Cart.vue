<template>
  <section class="cart-container">
    <nav-header></nav-header>
    <nav-crumbs></nav-crumbs>
    <cart-list></cart-list>
  </section>
</template>

<script>
import NavHeader from 'components/nav-header.vue'
import NavCrumbs from 'components/nav-crumbs.vue'
import CartList from './List.vue'

export default {
  components: {
    NavHeader,
    NavCrumbs,
    CartList
  }
}
</script>

<style>
.cart-container{
  background: #eee;
}
</style>
