<script setup lang="ts">
import { reactive } from 'vue'
interface BannerItem {
  imgUrl: string
  id: number
  title: string
}
const bannerList = reactive<BannerItem[]>([
  {
    imgUrl: 'https://zhongjiu-img-1305730468.cos.ap-shanghai.myqcloud.com/banner/banner1.png',
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
  <n-carousel class="h-screen" autoplay>
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
        >
          <div class="dot-border"></div>
          <span class="dot-title">{{ bannerList[index].title }}</span>
        </li>
      </ul>
    </template>
  </n-carousel>
</template>

<style lang="scss" scoped>
.banner-item {
  @apply relative;
  height: calc(100vh - 5.625rem);
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
}

.custom-dots {
  @apply w-screen h-20 flex absolute bottom-0 justify-evenly;
}

.custom-dots li {
  @apply flex cursor-pointer h-full flex-1 bg-opacity-0;
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .dot-border {
    @apply w-[21.375rem] h-[.375rem] rounded-sm;
  }

  span {
    @apply h-full w-full flex justify-center items-center text-white text-xl;
  }
}

.custom-dots li.is-active .dot-border {
  @apply bg-white;
}
</style>
