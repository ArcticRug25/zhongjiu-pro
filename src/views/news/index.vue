<script setup lang="ts">
import { vaildatePc } from '@/common/utils'
import NewsOne from '@/components/news/index-one.vue'
import NewsTwo from '@/components/news/index-two.vue'
import MNews from '@/components/news/mobile/index.vue'

const isPc = vaildatePc()
</script>

<template>
  <div v-if="isPc" class="news-container">
    <h1>中酒新闻</h1>
    <NewsOne />
    <NewsTwo />
    <NewsTwo />
    <NewsTwo />
  </div>
  <div v-else class="news-container">
    <h1>中酒新闻</h1>
    <MNews />
    <MNews />
  </div>
</template>

<style lang="scss" scoped>
.news-container {
  @apply flex flex-col items-center px-[5rem] my-[2.5rem];

  h1 {
    @apply text-[2.125rem] mb-[2.5rem] font-bold relative;

    &::after {
      content: '';
      @apply absolute w-[6rem] h-[.2rem] bg-[#c59d4a] inline-block -bottom-[.625rem] left-1/2 -translate-x-[50%];
    }
  }
}
</style>
