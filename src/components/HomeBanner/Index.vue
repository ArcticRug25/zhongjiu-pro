<script setup lang="ts">
import { reactive } from 'vue'
import { vaildatePc } from '@/common/utils'
interface BannerItem {
  imgUrl: string
  phoneImgUrl: string
  id: number
  title: string
}
const bannerList = reactive<BannerItem[]>([
  {
    imgUrl: '/src/assets/images/db3a5cece23c10fe6762bbee79891bf5.png',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 0,
    title: '中酒 · 荣耀1921'
  },
  {
    imgUrl: '/src/assets/images/db3a5cece23c10fe6762bbee79891bf5.png',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 1,
    title: '中酒 · 大师级'
  },
  {
    imgUrl: '/src/assets/images/db3a5cece23c10fe6762bbee79891bf5.png',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 2,
    title: '中酒 · 国香'
  },
  {
    imgUrl: '/src/assets/images/db3a5cece23c10fe6762bbee79891bf5.png',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 3,
    title: '中酒 · 1915'
  }
])

const isPc = vaildatePc()
</script>

<template>
  <n-carousel class="banner-container">
    <div v-for="bannerItem of bannerList" :key="bannerItem.id" class="banner-item">
      <img v-if="isPc" :src="bannerItem.imgUrl" />
      <img v-else :src="bannerItem.phoneImgUrl" />
    </div>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          class="dot"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
        <ul class="banner-titles">
          <li
            v-for="bannerItem in bannerList"
            :key="bannerItem.id"
            class="banner-title"
            @click="to(bannerItem.id)"
          >
            {{ bannerItem.title }}
          </li>
        </ul>
      </ul>
    </template>
  </n-carousel>
  <ul class="banner-titles"></ul>
</template>

<style lang="scss" scoped>
.banner-container {
  @apply h-[23.8125rem];
  .banner-item {
    @apply relative h-full items-center;
    img {
      @apply w-full h-full object-cover;
    }
  }

  .custom-dots {
    @apply flex w-full m-0 px-[1.5625rem] absolute bottom-[.75rem];
    @apply lg:px-[8.75rem] lg:bottom-[6.5rem];

    .dot {
      @apply inline-block flex-1 h-[1px] cursor-pointer;
      transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      @apply lg:h-1.5;

      &:after {
        @apply content-none absolute pb-9;
      }

      &.is-active {
        @apply bg-white;
      }
    }

    .banner-titles {
      @apply text-white w-full box-border absolute flex top-1 left-0 px-[1.5625rem];
      @apply lg:px-[8.75rem] lg:top-[2.5rem];

      .banner-title {
        @apply flex-1 flex top-1 justify-center cursor-pointer text-xs;
        @apply lg:text-xl;
      }
    }
  }
}

@media (min-width: 1024px) {
  .banner-container {
    height: calc(100vh - 5.625rem);
  }
}
</style>
