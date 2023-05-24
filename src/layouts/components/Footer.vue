<script setup lang="ts"></script>

<template>
  <footer>
    <div class="top">
      <div class="zhongjiu-logo">
        <img src="@/assets/images/zhongjiu-white.png" alt="" />
      </div>
      <ul class="footer-menu">
        <li>首页</li>
        <li>关于中酒</li>
        <li>产品展示</li>
        <li>公司动态</li>
        <li>关注我们</li>
      </ul>
    </div>
    <div class="divide"></div>
    <div class="bottom">
      <div>鄂ICP备 2022012421-1 号</div>
      <div>© 2023 中国中酒 - 公司官网 版权所有</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  @apply w-screen h-[31rem] bg-[#111111] overflow-hidden;

  .top {
    @apply flex h-[20.75rem] pt-[5rem] box-border;
    @apply lg:block;
    .zhongjiu-logo {
      @apply flex justify-center w-full;
      img {
        @apply h-[7rem] w-[3.625rem];
      }
    }

    .footer-menu {
      @apply flex flex-col w-full gap-[1.25rem] justify-start;
      @apply lg:flex-row lg:gap-[5rem] lg:mt-[3.5rem] lg:justify-center;
      li {
        @apply text-[#e7e7e7] text-[14px] cursor-pointer;
        @apply lg:text-[20px];
      }
    }
  }

  .divide {
    @apply w-screen h-[1px] bg-[#707070] opacity-80;
  }

  .bottom {
    @apply w-full h-[10.125rem] flex flex-col items-center justify-center;

    div {
      @apply text-[#b7b7b7] text-[16px];

      &:last-child {
        @apply mt-[0.5rem];
      }
    }
  }
}
</style>
