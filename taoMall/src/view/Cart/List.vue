<template>
  <section class="cartlist-container">
    <h2 class="title">购物车</h2>
    <div class="cart-list">
      <ul class="list-title list-rows">
        <li>商品</li>
        <li>价格</li>
        <li>数量</li>
        <li>总价</li>
        <li>编辑</li>
      </ul>
      <ul class="list-item list-rows">
        <li class="product-detail">
          <div class="check">
            <img src="../../assets/image/finish.png" alt="">
          </div>
          <div class="img-box">
            <img class="product-img" src="../../assets/image/product/1.jpg" alt="">
          </div>
          <p>自动折叠伞</p>
        </li>
        <li>￥99.00</li>
        <li>
          <div class="num-box">
            <span class="subtract">-</span><span class="count">1</span><span class="add">+</span>
          </div>
        </li>
        <li>￥99.00</li>
        <li><i class="iconfont">&#xe600;</i></li>
      </ul>
      <ul class="list-result list-rows">
        <li class="all">
          <div class="checkAll">
            <div class="check">
              <img src="../../assets/image/finish.png" alt="">
            </div>
            <span class="all-text">全部</span>
          </div>
          <div>
            <span>
              合计:
            </span>
            <span class="total">全部</span>
          </div>
        </li>
        <li class="settlement">去结算</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartList'
}
</script>

<style scoped>
@import '../../assets/css/font.css';

.cartlist-container{
  padding:15px 40px 15px 60px;
  color:#333;
  background:#f5f7fc;
}
.title{
  text-align: left;
}
.list-rows{
  display: flex;
  line-height: 60px;
  align-items: center;
  border:1px solid #605f61;
}
.list-title.list-rows{
  display: flex;
}
.list-title li{
  width: 210px;
}
.list-title li:nth-child(1){
  width: 360px;
}
.list-title.list-rows{
  color:#fff;
  background: #605f61;
}
.list-item li{
  width: 210px;
}
.list-rows .product-detail{
  width: 360px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.list-rows .check{
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 1px solid #dbd9db;
  border-radius: 20px;
}
.list-rows .check img{
  position: absolute;
  width: 20px;
  height: 20px;
  left:-1px;
  top: -1px;
  border-radius: 20px;
}
.list-item .img-box{
  width:58px;
  height: 58px;
  margin: 0 60px 0 40px;
  border: 1px solid #dbd9db;
}
.list-item .product-img{
  width:58px;
  height: 58px;
}

.list-item .num-box{
  display: flex;
  justify-content: space-between;
  margin: auto;
  width:128px;
  height: 30px;
  line-height: 30px;
  border:1px solid #dbd9db;
}
.num-box .subtract{
  width: 32px;
  font-size: 20px;
  border-right: 1px solid #dbd9db;
}

.num-box .add{
  width: 32px;
  font-size: 20px;
  border-left: 1px solid #dbd9db;
}
.list-rows.list-result{
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.list-result .all{
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}
.list-result .checkAll{
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.list-result .all-text{
  padding-left: 20px;
}
.list-result .settlement{
  width:100px;
}
</style>
