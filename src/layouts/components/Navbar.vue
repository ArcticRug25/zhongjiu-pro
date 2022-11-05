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
  <header :class="{ open: isOpen }">
    <div class="logo">中酒</div>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    <div class="burger lg:hidden" @click="handleBurger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
    <div class="open-mask absolute"></div>
  </header>
  <div class="header-block"></div>
</template>

<style lang="scss" scoped>
header {
  @apply w-screen h-[5.625rem] flex items-center justify-between px-10 bg-[#050505] fixed z-50;

  .logo {
    @apply text-white font-semibold text-2xl z-20 transition-all duration-300 ease-in;
  }

  :deep(.n-menu-item-content-header) {
    @apply text-white lg:block hidden #{!important};
  }

  :deep(.n-menu-item-content) {
    @apply px-8 #{!important};
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

.header-block {
  @apply w-screen h-[5.625rem];
}
</style>
