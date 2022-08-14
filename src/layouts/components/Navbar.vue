<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { ref } from 'vue'
const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'home'
  },
  {
    label: '关于中酒',
    key: 'dance-dance-dance',
    children: [
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: '产品展示',
    key: 'a-wild-sheep-chase'
  },
  {
    label: '公司动态',
    key: 'a-wild-sheep-chase'
  },
  {
    label: '关注我们',
    key: 'a-wild-sheep-chase'
  }
]
const activeKey = ref<string | null>(null)
</script>

<template>
  <header>
    <div class="logo">中酒</div>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </header>
</template>

<style lang="scss" scoped>
header {
  @apply w-screen h-[5rem] flex items-center justify-between px-10;

  .logo {
    @apply text-[#E7E9EC] font-semibold text-2xl;
  }

  :deep(.n-menu-item-content-header) {
    @apply text-[#E7E9EC] #{!important};
  }
}
</style>
