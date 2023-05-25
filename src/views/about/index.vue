<script setup lang="ts">
import { vaildatePc } from '@/common/utils'

const isPc = vaildatePc()
</script>

<template>
  <div class="about-container">
    <div class="intro-content">
      <div class="intro-left">
        <div class="intro-title">企业简介</div>
        <div class="divide"></div>
        <p class="intro-text">
          中酒黔晨酒业弘扬工匠精神，严守传统工艺，遴选每粒小红粮，珍视每滴赤河水，严格控制每一个流程环节，出好每滴酱酒。中酒以一颗赤诚的心，不懈追求品质和价值，致
          力于为中国人民酿造最好的酱酒，让中国的好酒走向世界。
          中酒黔晨酒业醉卧茅台河谷，相依赤水之滨；汲红军力源，悟主席大智；传承精益工匠，聚天地灵气；凝红缎精华取玉液琼浆；珍藏数年，神奇勾调；天成佳酿，妙不可言，芳香极舒，数日不尽。四渡赤水，中华崛起自此始；中酒，相约逐梦共举杯；品中酒，走崛起之路。
        </p>
      </div>
      <div class="intro-right">
        <div class="intro-img">
          <img src="@/assets/images/qiyejianjie.png" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="isPc" class="about-container second">
    <div class="intro-content">
      <div class="intro-right second">
        <div class="intro-img">
          <img src="@/assets/images/pinpai.jpeg" />
        </div>
      </div>
      <div class="intro-left">
        <div class="intro-title second">品牌故事</div>
        <div class="divide second"></div>
        <p class="intro-text">
          浸润世界最长硒矿带的天宝物华与钟灵毓秀；这是大自然的馈赠，更是人类的福源。坐拥北纬三十度与世界文明奇迹同处神秘纬线；这是秘境的画卷，更是文明的诗篇！得天时，占地利，享人和。中酒，与其相关的一切，都是那么机缘巧合，巧合得令人感叹！
          北宋名相寇准少年及第，十九岁知认巴东（太平兴国五年），于野三关劝农稼穑，教化乡民弃猎从耕，写下“苍天在上，厚土在下，效我神农，五谷丰登；挽草为界，定居稼穑，厚土归民，传之子孙”的“劝农歌”，开启了野三关千年古糟坊种粮酿酒的悠远源头。而今中酒的产区，恰好坐落于“茅台1915广场”侧畔。
        </p>
      </div>
    </div>
  </div>
  <div v-else class="about-container second">
    <div class="intro-content">
      <div class="intro-left">
        <div class="intro-title">品牌故事</div>
        <div class="divide"></div>
        <p class="intro-text">
          浸润世界最长硒矿带的天宝物华与钟灵毓秀；这是大自然的馈赠，更是人类的福源。坐拥北纬三十度与世界文明奇迹同处神秘纬线；这是秘境的画卷，更是文明的诗篇！得天时，占地利，享人和。中酒，与其相关的一切，都是那么机缘巧合，巧合得令人感叹！
          北宋名相寇准少年及第，十九岁知认巴东（太平兴国五年），于野三关劝农稼穑，教化乡民弃猎从耕，写下“苍天在上，厚土在下，效我神农，五谷丰登；挽草为界，定居稼穑，厚土归民，传之子孙”的“劝农歌”，开启了野三关千年古糟坊种粮酿酒的悠远源头。而今中酒的产区，恰好坐落于“茅台1915广场”侧畔。
        </p>
      </div>
      <div class="intro-right">
        <div class="intro-img">
          <img src="@/assets/images/pinpai.jpeg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  @apply w-screen bg-white box-border pb-[3.75rem];
  @apply lg:h-[26.875rem] lg:bg-[#F5F5F5] lg:py-[3.75rem];

  &.second {
    @apply pt-0;
    @apply lg:pt-[3.75rem];
  }

  &.second {
    @apply bg-white;
  }

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

      &.second {
        @apply lg:mr-[6%] lg:ml-0;
      }

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
