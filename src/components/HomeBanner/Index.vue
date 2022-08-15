<script setup lang="ts">
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
import { reactive } from 'vue'
interface BannerItem {
  imgUrl: string
  id: number
  title: string
  subtitle: string
  btn: string
}
const bannerList = reactive<BannerItem[]>([
  {
    imgUrl: 'http://rgegu3cpi.hn-bkt.clouddn.com/banner1.png',
    id: 1,
    title: '中国酱香，中国中酒',
    subtitle: '融酱香酒文化与东方美学一体，专为酱香爱好者打造',
    btn: '关于中酒'
  },
  {
    imgUrl: 'http://rgegu3cpi.hn-bkt.clouddn.com/banner2.png',
    id: 2,
    title: '中酒 · 问道',
    subtitle: '酒有大道，酿无止境',
    btn: '关于问道'
  },
  {
    imgUrl: 'http://rgegu3cpi.hn-bkt.clouddn.com/banner3.png',
    id: 3,
    title: '中酒 · 荣耀1935',
    subtitle: '博纳万物之灵，极尽精妙之工',
    btn: '关于荣耀'
  }
])
</script>

<template>
  <n-carousel class="h-screen" show-arrow autoplay>
    <div v-for="bannerItem of bannerList" :key="bannerItem.id" class="banner-item">
      <div class="backdrop"></div>
      <div class="banner-text">
        <h1>{{ bannerItem.title }}</h1>
        <h3>{{ bannerItem.subtitle }}</h3>
        <button class="banner-btn">{{ bannerItem.btn }}</button>
      </div>
      <img :src="bannerItem.imgUrl" />
    </div>
    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="curtom-arrow--left" @click="prev">
          <n-icon><ArrowBack /></n-icon>
        </button>
        <button type="button" class="curtom-arrow--right" @click="next">
          <n-icon><ArrowForward /></n-icon>
        </button>
      </div>
    </template>
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
</template>

<style lang="scss" scoped>
.banner-item {
  @apply h-screen relative;
  .banner-text {
    @apply absolute z-20 top-[50%] left-4 translate-y-[-50%] text-[#E7E9EC];
    @apply lg:left-32;
    h1 {
      @apply text-3xl font-bold;
      @apply lg:text-6xl;
    }
    h3 {
      @apply text-lg font-bold my-4;
      @apply lg:text-2xl lg:my-12;
    }
    .banner-btn {
      @apply bg-[#ff434f] text-[#e7e9ec] px-6 py-2 rounded-[.25rem] text-[.825rem] transition-all duration-300;
      @apply lg:px-8 lg:py-3 lg:text-[1.125rem] will-change-auto;
      &:hover {
        filter: drop-shadow(0 0 0.3em #ff434f);
      }
    }
  }
  img {
    /* width: 100vw; */
    height: 100vh;
    object-fit: cover;
  }
  .backdrop {
    @apply h-screen w-screen absolute left-0 top-0 z-10;
    background-color: rgba(42, 42, 42, 0.69);
  }
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
