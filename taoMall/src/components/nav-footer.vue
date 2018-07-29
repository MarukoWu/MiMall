<template>
  <footer class="nav-footer">
    <div class="footer-wrap">
      <div class="region">
        <span>地区</span>
        <select name="region" id="region" class="select">
          <option value="">中国</option>
          <option value="">USA</option>
          <option value="">India</option>
        </select>
      </div>
      <ul class="about">
        <li>Copyright © 2018 taoMall.com 版权所有</li>
        <li>隐私策略</li>
        <li>团队合作</li>
        <li>关于我们</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NavFooter'
}
</script>

<style>
.nav-footer{
  background: #f5f7fc;
}
.nav-footer .footer-wrap{
  display: flex;
  justify-content: space-between;
  padding:50px 40px 15px 60px;
}
.nav-footer .footer-wrap .region{
  margin-left:40px;
}
.nav-footer .footer-wrap .select{
  border-radius: 5px;
}
.nav-footer .footer-wrap .about{
  display: flex;
  margin-right: 30px;
  color: #a1a1a1
}
.nav-footer .footer-wrap .about li{
  margin: 0 10px;
}
</style>
