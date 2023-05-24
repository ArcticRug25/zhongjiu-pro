<script setup lang="ts">
import { ChevronBack, ChevronForwardOutline } from '@vicons/ionicons5'
import { reactive, ref } from 'vue'
import { vaildatePc } from '@/common/utils'
interface BannerItem {
  imgUrl: string
  phoneImgUrl: string
  id: number
  title: string
}
const productList = reactive<BannerItem[]>([
  {
    imgUrl: 'https://www.gzzjc.cn/static/cn/images/33.jpg',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 0,
    title: '中酒 · 荣耀1921'
  },
  {
    imgUrl: 'https://www.gzzjc.cn/static/cn/images/11.jpg',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 1,
    title: '中酒 · 大师级'
  },
  {
    imgUrl: 'https://www.gzzjc.cn/upload/images/zj.png',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 2,
    title: '中酒 · 国香'
  },
  {
    imgUrl: '/src/assets/images/home-product.png',
    phoneImgUrl: '/src/assets/images/ba84930541213be822180655651ddd40.jpeg',
    id: 3,
    title: '中酒 · 1915'
  }
])

const currentProduct = ref(1)

const productCarouselRef = ref<any>()
const toggleProduct = (type: 'prev' | 'next') => {
  const carouselRef = (productCarouselRef as any).value
  if (type === 'prev') {
    carouselRef.prev()
  } else {
    carouselRef.next()
  }
}

const handleCurrentIndexChange = (index: number) => {
  currentProduct.value = index
}

const isPc = vaildatePc()
</script>

<template>
  <div class="home-product-container">
    <div class="home-product">
      <n-icon
        class="left-button"
        color="#7F7F7F"
        :component="ChevronBack"
        @click="toggleProduct('prev')"
      />
      <n-carousel
        ref="productCarouselRef"
        class="home-product-carousel"
        :space-between="30"
        :loop="false"
        :slides-per-view="3"
        centered-slides
        :default-index="1"
        :show-dots="false"
        draggable
        :on-update:current-index="handleCurrentIndexChange"
      >
        <n-carousel-item v-for="productItem in productList" :key="productItem.id">
          <img class="product-img" :src="productItem.imgUrl" />
        </n-carousel-item>
      </n-carousel>
      <n-icon
        class="right-button"
        color="#7F7F7F"
        :component="ChevronForwardOutline"
        @click="toggleProduct('next')"
      />
      <n-carousel
        class="home-product-name-carousel"
        :default-index="1"
        :current-index="currentProduct"
        :show-dots="false"
      >
        <n-carousel-item v-for="productItem in productList" :key="productItem.id">
          <div class="product-name">{{ productItem.title }}</div>
        </n-carousel-item>
      </n-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-product-container {
  @apply w-[100vw] h-[21.25rem] relative box-border py-[3.75rem];
  @apply lg:h-[33.75rem];
  .home-product {
    @apply w-[86vw] h-full box-border relative flex items-center mx-auto;
    .home-product-carousel {
      @apply w-full h-full flex items-center justify-center;
      .product-img {
        @apply transition-all duration-300 ease-in-out h-[7.9375rem];
        @apply lg:h-[17.6875rem];
      }

      :deep(.n-carousel__slide) {
        @apply flex items-center justify-center;
      }

      :deep(.n-carousel__slide--current) {
        .product-img {
          @apply transform scale-125;
        }
      }
    }

    .left-button,
    .right-button {
      @apply hidden items-center justify-center cursor-pointer z-20 w-[3.75rem] h-[3.75rem];
      @apply lg:flex;
      :deep(svg) {
        @apply text-2xl;
      }
    }

    .home-product-name-carousel {
      @apply absolute -bottom-8 h-[2.25rem] w-full;
      .product-name {
        @apply flex justify-center text-[#333] text-[18px] font-[700];
      }
    }
  }
}
</style>
