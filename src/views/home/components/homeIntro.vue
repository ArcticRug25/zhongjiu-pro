<script setup lang="ts">
import { reactive, ref } from 'vue'
</script>

<template>
  <div class="home-intro">
    <div class="intro-content">
      <div class="intro-left">
        <div class="intro-title">主要业务</div>
        <div class="divide"></div>
        <p class="intro-text">
          中酒黔晨酒业弘扬工匠精神，严守传统工艺，遴选每粒小红粮，珍视每滴赤河水，严格控制每一个流程环节，出好每滴酱酒。
          中酒永远以一颗赤诚的心，不懈追求品质和价值，致力于为中国人民酿造最好的酱酒，让中国的好酒走向世界。
          中酒黔晨酒业醉卧茅台河谷，相依赤水之滨；汲红军力源，悟主席大智；传承精益工匠，聚天地灵气；凝红缎精华取玉液琼浆；珍藏数年，神奇勾调；天成佳酿，妙不可言，芳香极舒，数日不尽。四渡赤水，中华崛起自此始；中酒，相约逐梦共举杯；品中酒，走崛起之路。
        </p>
        <n-button color="#BF9F58" class="intro-btn" type="primary" size="large">走进中酒</n-button>
      </div>
      <div class="intro-right">
        <div class="intro-img">
          <img src="https://www.gzzjc.cn/upload/images/2021123031.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-intro {
  @apply w-screen bg-[#F5F5F5] box-border py-[3.75rem];
  @apply lg:h-[26.875rem];

  .intro-content {
    @apply w-[86%] mx-auto flex flex-col;
    @apply lg:flex-row;

    .intro-left {
      @apply w-full h-full box-border;
      @apply lg:w-[47%];
      .intro-title {
        @apply text-xl font-bold text-[#333333];
      }
      .divide {
        @apply w-[3.125rem] h-[0.125rem] bg-[#333333] mt-[0.625rem];
      }

      .intro-text {
        @apply text-[#333] text-sm mt-[1.25rem] leading-6;
      }

      .intro-btn {
        @apply bg-[#BF9F58] mt-6;
      }
    }

    .intro-right {
      @apply w-full h-full box-border mt-8;
      @apply lg:w-[47%] lg:ml-[6%] lg:mt-0;

      .intro-img {
        @apply w-full h-full box-border overflow-hidden;
        img {
          @apply w-full h-full object-cover transition-all duration-500;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
