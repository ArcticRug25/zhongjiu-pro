<script setup lang="ts"></script>

<template>
  <div class="news">
    <!-- 标题 -->
    <div class="news-list">
      <div class="news-first">
        <div class="left-img">
          <div class="news-date">
            <div class="day">22</div>
            <div class="month">2022-07</div>
          </div>
          <img src="@/assets/images/news1.jpg" alt="" />
        </div>
        <div class="right-content">
          <p class="news-title">
            中酒品牌丨中酒与中央电视台签约战略合作，正式开展全方位品牌推广活动
          </p>
          <p class="news-content">
            中酒，深谙中华文化之道。融酱香酒文化与东方美学于一体，专为酱香爱好者打造。既担名“中国中酒”，自有独一无二品质后盾。中酒，根植于中国酱香酒核心产区茅台古镇赤水河畔，原产地地域优势与规模优势，铸就了中酒酒体的稳定和品质风格的纯正。中酒酒业董事长杨太荣先生表示：“此次合作的签约代表着中酒品牌正式开启全国范围内的推广，希望能让更多白酒爱好者了解中酒，品鉴中酒。中酒将会带着令人惊艳的酱香品质与广大消费者初次见面。”
          </p>
          <a
            class="news-more"
            target="_blank"
            href="https://mp.weixin.qq.com/s?__biz=MzkyNzM5MTc0OQ==&mid=2247483664&idx=1&sn=35130acb16a6b557c2f70c4fabf31705&chksm=c229887af55e016c0dd56d484ac35e1b535c8e3b7b6e83ce71d725d0e732eb08496af18dd3e0#rd"
            >阅读更多</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-first {
  @apply flex w-full h-[13.75rem] cursor-pointer;

  .left-img {
    @apply h-full w-[300px] relative;

    .news-date {
      @apply absolute left-0 top-0 h-[75px] w-[75px] bg-[#c59d4a] text-white text-center;

      .day {
        @apply font-bold text-[40px] leading-[50px];
      }

      .month {
        @apply font-bold text-[14px] leading-[22px];
      }
    }

    img {
      @apply h-full w-[18.75rem];
    }
  }

  .right-content {
    @apply flex-1 h-full box-border bg-[#f5f5f5] pl-[1.5625rem] pr-[2.5rem];

    .news-title {
      @apply text-[18px] font-bold truncate mt-[1.6875rem] mb-[.8125rem] text-[#383838] leading-[30px] transition-all duration-300 ease-in;

      &:hover {
        @apply text-[#c59d4a];
      }
    }

    .news-content {
      @apply text-[14px] text-[#333] leading-[34px] max-h-[68px] line-clamp-2 block;
    }

    .news-more {
      @apply inline-block text-[#fff] bg-[#c59d4a] shadow-md mt-[.9375rem] text-center text-[14px] w-[140px] leading-[42px] rounded-[3px] outline-none border-none cursor-pointer;
    }

    &:hover .news-title {
      @apply text-[#c59d4a];
    }
  }
}
</style>
