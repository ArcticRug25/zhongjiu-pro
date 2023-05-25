<script setup lang="ts"></script>

<template>
  <!-- 标题 -->
  <a
    class="news-item"
    target="_blank"
    href="https://mp.weixin.qq.com/s?__biz=MzkyNzM5MTc0OQ==&mid=2247483664&idx=1&sn=35130acb16a6b557c2f70c4fabf31705&chksm=c229887af55e016c0dd56d484ac35e1b535c8e3b7b6e83ce71d725d0e732eb08496af18dd3e0#rd"
  >
    <div class="left-date">
      <div class="day">22</div>
      <div class="month">2022-07</div>
    </div>
    <div class="right-content">
      <p class="news-title">中酒品牌丨中酒与中央电视台签约战略合作，正式开展全方位品牌推广活动</p>
      <p class="news-content">
        中酒，深谙中华文化之道。融酱香酒文化与东方美学于一体，专为酱香爱好者打造。既担名“中国中酒”，自有独一无二品质后盾。中酒，根植于中国酱香酒核心产区茅台古镇赤水河畔，原产地地域优势与规模优势，铸就了中酒酒体的稳定和品质风格的纯正。中酒酒业董事长杨太荣先生表示：“此次合作的签约代表着中酒品牌正式开启全国范围内的推广，希望能让更多白酒爱好者了解中酒，品鉴中酒。中酒将会带着令人惊艳的酱香品质与广大消费者初次见面。”
      </p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.news-item {
  @apply w-full h-[9.5rem] flex items-center mt-[2.5rem] bg-[#f5f5f5] transition-all duration-500;

  .left-date {
    @apply w-[6.875rem] flex flex-col justify-center relative text-[#808080] h-full text-center pt-[.9375rem] pb-[.6875rem];

    .day {
      @apply text-[46px] leading-[50px] transition-all duration-500;
    }

    .month {
      @apply pt-[.6875rem] text-base leading-[1.875rem] transition-all duration-500;

      &::after {
        content: '';
        @apply w-[1px] h-[74px] bg-[#e6e6e6] inline-block absolute right-0 top-1/2 mt-[-37px];
      }
    }
  }

  .right-content {
    @apply flex-1 mx-[40px];

    .news-title {
      @apply truncate mt-[1rem] mb-[.75rem] text-lg font-bold text-[#383838] transition-all duration-500;
    }

    .news-content {
      @apply text-sm h-[3.25rem] leading-[1.625rem] text-[#757575] line-clamp-2;
    }
  }

  &:hover {
    @apply bg-[#fcf1f0];
    .day,
    .month,
    .news-title {
      @apply text-[#b30404];
    }
  }
}
</style>
