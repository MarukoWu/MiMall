<template>
  <section class="cart-container">
    <nav-header></nav-header>
    <nav-crumbs></nav-crumbs>
    <cart-list></cart-list>
    <nav-footer></nav-footer>
  </section>
</template>

<script>
import NavHeader from 'components/nav-header.vue'
import NavCrumbs from 'components/nav-crumbs.vue'
import NavFooter from 'components/nav-footer.vue'
import CartList from './List.vue'

export default {
  components: {
    NavHeader,
    NavCrumbs,
    NavFooter,
    CartList
  }
}
</script>

<style>
.cart-container{
  background: #eee;
}
</style>
