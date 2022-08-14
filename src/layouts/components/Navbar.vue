<script setup lang="ts"></script>

<template>
  <header class="open">
    <div class="logo">中酒</div>
    <!-- 导航 -->
    <nav>
      <a href="../../index.html">首页</a>
      <a href="javascript:void(0)">关于中酒</a>
      <a href="../product-list/index.html">产品展示</a>
      <a href="../news/index.html">公司动态</a>
      <a href="#about-us">关注我们</a>
      <i class="fas fa-search"></i>
    </nav>
    <!-- 折叠导航按钮 -->
    <div class="burger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 80px;
  /* 栅格布局 */
  display: grid;
  padding: 0 40px;

  /* 两列，一列占三分之一，一列占三分之二 */
  grid-template-columns: 1fr 2fr;
  /* 垂直居中 */
  align-items: center;
  /* 用于定位导航菜单 */
  position: relative;
  z-index: 200;
}
.logo {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-color-lightest);
}
/* 导航 */
header nav {
  /* 水平靠右对齐 */
  justify-self: end;
}

/* 导航链接 */
header nav a {
  color: var(--text-color-lightest);
  text-decoration: none;
  margin: 0 24px;
}

/* 搜索图标 */
header nav i {
  color: var(--text-color-lightest);
}
/* 折叠菜单 */
header .burger {
  display: none;
}

/* 页面下滑时固定导航，背景设置为白色 */
header.sticky {
  position: fixed;
  background-color: white;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
  animation: dropDown 0.5s ease-in-out forwards;
}

/* 固定导航文字颜色为黑色 */
header.sticky .logo,
header.sticky nav a,
header.sticky nav i {
  color: var(--text-color-darker);
}

/* 固定导航下滑动画 */
@keyframes dropDown {
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
}
@media (max-width: 1100px) {
  /* 导航设置为不可见，点击折叠按钮显示全屏导航 */
  header nav {
    display: none;
  }

  /* 头部平分两列布局 */
  header {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 折叠菜单样式，显示出来 */
  header .burger {
    display: block;
    justify-self: end;
    cursor: pointer;
    position: relative;
    width: 20px;
    height: 6px;
  }

  /* 折叠按钮线条样式 */
  .burger-line1,
  .burger-line2,
  .burger-line3 {
    width: 20px;
    height: 2px;
    background-color: var(--text-color-lightest);
    /* position: relative; */
  }

  /* 上移第一条线 */
  .burger-line1 {
    position: absolute;
    top: -6px;
  }
  /* 下移第三条线 */
  .burger-line3 {
    position: absolute;
    top: 6px;
  }

  /* 全屏导航展开时，折叠按钮设置为深色 */
  header.open .burger-line1,
  header.open .burger-line2,
  header.open .burger-line3,
  header.sticky .burger-line1,
  header.sticky .burger-line2,
  header.sticky .burger-line3 {
    background-color: var(--text-color-darker);
    transition: 0.4s ease;
  }

  /* 全屏导航显示时，折叠按钮第一条线样式 */
  header.open .burger-line1 {
    transform: rotate(45deg) translate(3px, 5px);
  }

  /* 全屏导航显示时，折叠按钮第二条线样式 */
  header.open .burger-line2 {
    transform: translateX(5px);
    opacity: 0;
  }

  /* 全屏导航显示时，折叠按钮第三条线样式 */
  header.open .burger-line3 {
    transform: rotate(-45deg) translate(3px, -5px);
  }
  /* 全屏导航显示时，logo样式 */
  header.open .logo {
    color: var(--text-color-darker);
    z-index: 40;
  }

  /* 全屏导航显示时，导航菜单样式 */
  header.open nav {
    display: grid;
    /* 每行高度为内容的高度，不设置会平分全屏高度 */
    grid-auto-rows: max-content;
    /* 菜单项靠右对齐 */
    justify-items: end;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    width: 100vw;
    height: 100vh;
    padding: 0 40px;
    opacity: 0;
    /* 下滑效果 */
    animation: slideDown 0.6s ease-out forwards;
  }
  /* 全屏导航显示时，导航菜单项样式和动画 */
  header.open nav > * {
    margin: 4px 0;
    font-size: 18px;
    color: var(--text-color-darker);
    opacity: 0;
    animation: showMenu 0.5s linear forwards 0.4s;
  }

  /* 搜索按钮 */
  header.open nav > i.fas {
    margin-top: 10px;
  }

  /* 导航下滑动画 */
  @keyframes slideDown {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: 100vh;
      padding-top: 80px;
      opacity: 1;
    }
  }

  /* 菜单项动画 */
  @keyframes showMenu {
    from {
      opacity: 0;
      transform: translateY(-1vh);
    }
    to {
      opacity: 1;
    }
  }
  /* 缩小业务流程标题字体 */
  .service-item .service-title {
    font-size: 20px;
  }
  /* 缩小业务流程内容字体和行距 */
  .service-item .service-content {
    font-size: 14px;
    line-height: 24px;
  }

  /* 团队成员改为两列 */
  .team-members {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6vw;
    row-gap: 36px;
  }
  /* 公司动态改为两列 */
  .activities {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 36px;
  }
}
</style>