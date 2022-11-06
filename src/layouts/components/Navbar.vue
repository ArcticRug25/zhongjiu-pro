<script setup lang="ts">
import { ref } from 'vue'
import { menus } from '@/common/data/menu'
const menuOptions = menus
const activeKey = ref<string | null>(null)
const isOpen = ref<boolean>(false)

const handleBurger = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="layout-header" :class="{ open: isOpen }">
    <div class="logo">
      <img src="/src/assets/images/logo-white.png" alt="logo" />
    </div>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <div class="burger lg:hidden" @click="handleBurger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
    <div class="open-mask absolute"></div>
  </header>
</template>

<style lang="scss" scoped>
.layout-header {
  @apply w-full h-full flex items-center justify-between px-10 bg-[#050505];

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
      @apply text-white;
    }
  }

  .burger {
    @apply absolute cursor-pointer right-[2rem] w-[20px] h-[6px] justify-self-end z-20;

    .burger-line1,
    .burger-line2,
    .burger-line3 {
      @apply w-[20px] h-[2px] bg-[#e7e9ec] transition-all duration-300 ease-in;
    }

    .burger-line1 {
      @apply absolute -top-[6px];
    }

    .burger-line3 {
      @apply absolute top-[6px];
    }
  }
  &.open {
    .burger {
      @apply block;
    }

    .burger-line1,
    .burger-line2,
    .burger-line3 {
      @apply bg-[#2e2e2e];
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
    }
  }
}
</style>
