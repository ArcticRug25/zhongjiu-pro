<script setup lang="ts">
import { reactive } from 'vue'
interface BannerItem {
  imgUrl: string
  id: number
  title: string
}
const bannerList = reactive<BannerItem[]>([
  {
    imgUrl: '/src/assets/db3a5cece23c10fe6762bbee79891bf5.png',
    id: 1,
    title: '中酒 · 荣耀1921'
  },
  {
    imgUrl: 'https://zhongjiu-img-1305730468.cos.ap-shanghai.myqcloud.com/banner/banner2.png',
    id: 2,
    title: '中酒 · 大师级'
  },
  {
    imgUrl: 'https://zhongjiu-img-1305730468.cos.ap-shanghai.myqcloud.com/banner/banner3.png',
    id: 3,
    title: '中酒 · 国香'
  },
  {
    imgUrl: 'https://zhongjiu-img-1305730468.cos.ap-shanghai.myqcloud.com/banner/banner3.png',
    id: 3,
    title: '中酒 · 1915'
  }
])
</script>

<template>
  <n-carousel>
    <div v-for="bannerItem of bannerList" :key="bannerItem.id" class="banner-item">
      <img :src="bannerItem.imgUrl" />
    </div>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
  <ul class="banner-titles"></ul>
</template>

<style lang="scss" scoped>
.banner-item {
  @apply relative;
  height: calc(100vh - 5.625rem);
  img {
    @apply w-full h-full object-cover;
  }
}

.custom-dots {
  @apply flex m-0 p-0 absolute bottom-5 left-5;
}

.custom-dots li {
  @apply inline-block w-3 h-1 mx-[.1875rem] rounded cursor-pointer;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.custom-dots li.is-active {
  @apply w-10 bg-white;
}
</style>
