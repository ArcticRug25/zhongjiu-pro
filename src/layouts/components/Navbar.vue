<script setup lang="ts">
import { ref } from 'vue'
import { menus } from '@/common/data/menu'
import router from '@/router'
const menuOptions = menus
const activeKey = ref<string | null>(null)
const isOpen = ref<boolean>(false)

const handleBurger = () => {
  isOpen.value = !isOpen.value
}

// 路由跳转
const handleRoute = (key: string) => {
  activeKey.value = key
  isOpen.value = false
  switch (key) {
    case 'home':
      router.push({ path: '/' })
      break
    case 'about':
      router.push({ path: '/about' })
      break
    case 'product':
      router.push({ path: '/product' })
      break
    case 'news':
      router.push({ path: '/news' })
      break
    case 'contact':
      router.push({ path: '/contact' })
      break
    default:
      break
  }
}
</script>

<template>
  <header class="layout-header" :class="{ open: isOpen }">
    <div class="logo">
      <img src="/src/assets/images/logo1.png" alt="logo" />
    </div>
    <n-menu v-model:value="activeKey" color="#c59d4a" mode="horizontal" :options="menuOptions" />
    <div class="burger lg:hidden" @click="handleBurger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
    <div class="open-mask absolute">
      <nav>
        <div @click="handleRoute('home')">首页</div>
        <div @click="handleRoute('about')">关于中酒</div>
        <div @click="handleRoute('product')">产品展示</div>
        <div @click="handleRoute('news')">公司动态</div>
        <div @click="handleRoute('contact')">关注我们</div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.layout-header {
  @apply w-full h-full flex items-center justify-between px-10 bg-white text-black border-b border-[#F9F9F9];

  .logo {
    @apply h-full w-screen flex items-center justify-center z-20;
    @apply lg:w-[6.25rem] lg:justify-start;
    img {
      @apply w-[2.75rem] h-[1.75rem];
      @apply lg:w-[4.25rem] lg:h-[2.6875rem];
    }
  }

  :deep(.n-menu-item) {
    @apply lg:block hidden #{!important};

    .n-menu-item-content {
      @apply px-8 #{!important};
    }

    .n-menu-item-content-header {
      @apply text-black;
    }
  }

  .burger {
    @apply absolute cursor-pointer right-[2rem] w-[20px] h-[6px] justify-self-end z-20;

    .burger-line1,
    .burger-line2,
    .burger-line3 {
      @apply w-[20px] h-[2px] bg-[#EDCE9B] transition-all duration-300 ease-in;
    }

    .burger-line1 {
      @apply absolute -top-[6px];
    }

    .burger-line3 {
      @apply absolute top-[6px];
    }
  }

  nav {
    @apply hidden;
  }

  &.open {
    .burger {
      @apply block;
    }

    .burger-line1,
    .burger-line2,
    .burger-line3 {
      @apply bg-[#EDCE9B];
    }

    .burger-line1 {
      @apply rotate-45 translate-x-[4px] translate-y-[6px];
    }

    .burger-line2 {
      @apply translate-x-[6px] opacity-0;
    }

    .burger-line3 {
      @apply -rotate-45 translate-x-[4px] -translate-y-[6px];
    }

    .logo {
      @apply text-[#2e2e2e];
    }

    .open-mask {
      @apply absolute bg-white w-screen h-screen z-10 left-0 top-0;
      /* 下滑效果 */
      animation: slideDown 0.6s ease-out forwards;

      nav {
        @apply block mr-[1.5rem] text-right;
        * {
          margin: 4px 0;
          cursor: pointer;
          font-size: 18px;
          color: var(--text-color-darker);
          opacity: 0;
          animation: showMenu 0.5s linear forwards 0.4s;
        }
      }
    }
  }
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
</style>
