import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/view/Cart/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart
    }
  ]
})
