<script setup lang="ts">
import { CalendarOutline } from '@vicons/ionicons5'
</script>

<template>
  <!-- 动态 -->
  <div class="activity">
    <!-- 动态图片 -->
    <div class="act-image-wrapper">
      <img src="@/assets/images/news1.jpg" alt="" />
    </div>
    <!-- 动态元数据，包括发表日期和评论数量 -->
    <div class="meta">
      <!-- 发布日期 -->
      <p class="date-published">
        <n-icon color="#7F7F7F" :component="CalendarOutline" />
        <span>2022年7月22日</span>
      </p>
    </div>
    <!-- 动态标题 -->
    <h2 class="act-title">中酒品牌丨中酒与中央电视台签约战略合作，正式开展全方位品牌推广活动</h2>
    <!-- 动态内容摘要 -->
    <article>
      中酒，深谙中华文化之道。融酱香酒文化与东方美学于一体，专为酱香爱好者打造。既担名“中国中酒”，自有独一无二品质后盾。中酒，根植于中国酱香酒核心产区茅台古镇赤水河畔，原产地地域优势与规模优势，铸就了中酒酒体的稳定和品质风格的纯正。中酒酒业董事长杨太荣先生表示：“此次合作的签约代表着中酒品牌正式开启全国范围内的推广，希望能让更多白酒爱好者了解中酒，品鉴中酒。中酒将会带着令人惊艳的酱香品质与广大消费者初次见面。”
    </article>
    <!-- 阅读更多按钮 -->
    <a
      class="readmore-btn"
      target="_blank"
      href="https://mp.weixin.qq.com/s?__biz=MzkyNzM5MTc0OQ==&mid=2247483664&idx=1&sn=35130acb16a6b557c2f70c4fabf31705&chksm=c229887af55e016c0dd56d484ac35e1b535c8e3b7b6e83ce71d725d0e732eb08496af18dd3e0#rd"
      >阅读更多</a
    >
  </div>
</template>

<style lang="scss" scoped>
.activity {
  @apply w-[84vw] shadow-lg p-[1.5rem] transition-all duration-[400] mb-[2.5rem];

  .act-image-wrapper {
    @apply h-[15.9375rem] overflow-hidden -m-[1.5rem] mb-0;

    img {
      @apply object-cover min-h-[300px];
    }
  }

  .meta {
    @apply mt-[1.25rem] mb-[.75rem];

    .date-published {
      @apply flex items-center mr-[1.25rem] text-[#757575];

      span {
        @apply ml-[.5rem];
      }
    }
  }

  .act-title {
    @apply text-[#383838] font-bold text-[1.125rem] mb-[1.25rem] line-clamp-2;
  }

  article {
    @apply text-[#757575] tracking-[.54px] leading-[24px] line-clamp-3;
  }

  .readmore-btn {
    @apply inline-block border-0 text-white bg-[#c59d4a] rounded-[4px] py-[6px] px-[14px] mt-[1.25rem] cursor-pointer;
  }

  &:hover {
    transform: translateY(-20px) scale(1.05);
    box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
  }
}
</style>
