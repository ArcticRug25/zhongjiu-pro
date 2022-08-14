<script setup lang="ts"></script>

<template>
  <footer>
    <div class="footer-menus">
      <!-- 联系信息 -->
      <div class="contact-us">
        <p class="menu-title">联系我们</p>
        <p>地址：中国XX省XX市XX路XX商务中心10号楼</p>
        <p>电话：+18618618611861</p>
        <p>传真：+18618618611861</p>
        <p>电子邮箱：admin@abc.com</p>
      </div>
      <!-- 导航菜单 -->
      <div class="service-menu footer-menu">
        <p class="menu-title">服务概览</p>
        <ul class="menu-items">
          <li><a href="#">网站建设</a></li>
          <li><a href="#">域名购买</a></li>
          <li><a href="#">网页设计</a></li>
          <li><a href="#">移动应用</a></li>
        </ul>
      </div>
      <div class="showcase-menu footer-menu">
        <p class="menu-title">成功案例</p>
        <ul class="menu-items">
          <li><a href="#">桌面网站</a></li>
          <li><a href="#">移动网站</a></li>
          <li><a href="#">科研项目</a></li>
          <li><a href="#">软件应用</a></li>
        </ul>
      </div>
      <div class="activity-menu footer-menu">
        <p class="menu-title">公司动态</p>
        <ul class="menu-items">
          <li><a href="#">信息公开</a></li>
          <li><a href="#">最近新闻</a></li>
          <li><a href="#">最新博客</a></li>
        </ul>
      </div>
      <div class="help-menu footer-menu">
        <p class="menu-title">帮助与支持</p>
        <ul class="menu-items">
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">联系客服</a></li>
          <li><a href="#">文档资源</a></li>
        </ul>
      </div>
      <!-- 备案信息 -->
      <p class="icp-info">京ICP备 12345678901-1 号</p>
      <!-- 版权信息 -->
      <p class="rights">&copy; 2022 中国中酒 - 公司官网 版权所有</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 124px;
  background-color: #181818;
  display: grid;
  justify-items: center;
  padding-top: 72px;
  padding-bottom: 24px;
}
.footer-menus {
  width: 100%;
  max-width: 1180px;
  display: grid;
  /* 5列布局 */
  grid-template-columns: 2fr repeat(4, 1fr);
  padding: 0 80px;
  position: relative;
}

/* 导航菜单，靠右对齐 */
.footer-menu {
  justify-self: end;
}

/* 一级菜单 */
.menu-title {
  font-size: 16px;
  color: white;
  font-weight: 500;
  margin-bottom: 20px;
}

/* 联系我们，靠左对齐 */
.contact-us {
  justify-self: start;
  color: var(--text-color-lightest);
}

/* 联系我们，文字 */
.contact-us p:not(:first-child) {
  padding-bottom: 16px;
}

/* 菜单项 */
.menu-items li {
  list-style: none;
  padding-bottom: 8px;
}
/* 菜单链接 */
.menu-items li a {
  text-decoration: none;
  font-weight: 300;
  color: var(--text-color-lightest);
}

/* 备案信息 */
.icp-info {
  margin-top: 24px;
  margin-bottom: 16px;
}

/* 备案信息，版权信息 */
.icp-info,
.rights {
  /* 占满整行，-1代表最后一个编号 */
  grid-column: 1 / -1;
  /* 居中对齐 */
  justify-self: center;
  color: white;
}
</style>
