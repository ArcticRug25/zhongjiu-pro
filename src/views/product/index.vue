<script setup lang="ts">
import { ref } from 'vue'
import type { TabsProps } from 'naive-ui'
import { vaildatePc } from '../../common/utils/index'
import Product from '@/components/product/index.vue'
import MProduct from '@/components/product/mobile/index.vue'
const placement = ref('left')
const type = ref<TabsProps['type']>('line')
const isPc = vaildatePc()
</script>

<template>
  <n-tabs
    v-if="isPc"
    class="product-tabs pc"
    size="large"
    :type="type"
    :bar-width="200"
    :placement="placement"
    animated
  >
    <n-tab-pane name="中酒初心" tab="中酒初心"> <Product /> </n-tab-pane>
    <n-tab-pane name="the beatles" tab="the Beatles"> Hey Jude </n-tab-pane>
  </n-tabs>
  <n-tabs v-else type="line" tab-style="min-width: 120px" class="product-tabs mobile">
    <n-tab-pane name="chap1" tab="中酒 · 初心">
      <MProduct />
    </n-tab-pane>
    <n-tab-pane name="chap2" tab="中酒 · 初心">
      <MProduct />
    </n-tab-pane>
    <n-tab-pane name="chap3" tab="中酒 · 初心">
      <MProduct />
    </n-tab-pane>
    <n-tab-pane name="chap4" tab="中酒 · 初心">
      <MProduct />
    </n-tab-pane>
    <n-tab-pane name="chap5" tab="中酒 · 初心">
      <MProduct />
    </n-tab-pane>
  </n-tabs>
</template>

<style lang="scss" scoped>
.product-tabs {
  @apply h-[100%];

  &.pc {
    :deep(.n-tabs-nav-scroll-content) {
      @apply h-full w-[200px];

      .n-tabs-wrapper {
        @apply justify-center;
      }
    }
  }

  &.mobile {
    :deep(.n-tabs-nav-scroll-content) {
      @apply h-full min-w-full;
      .n-tabs-tab {
        @apply justify-center;
      }
    }
  }
}
</style>
