<script setup lang="ts">
import { MailOutline } from '@vicons/ionicons5'
import { vaildatePc } from '../../common/utils/index'

const isPc = vaildatePc()
</script>

<template>
  <div v-if="isPc" class="pc-contact-container">
    <div class="contact-detail">
      <div class="left">
        <img src="@/assets/images/logo2.png" />
      </div>
      <div class="right">
        <div class="contact-content">
          <h3 class="contact-title">400-999-0988</h3>
          <span>咨询电话</span>
        </div>
        <div class="mail">
          <n-icon :component="MailOutline" />
          <span>广告部邮箱：</span>
          <span>panxiaowh@163.com</span>
        </div>
      </div>
    </div>
    <div class="code-wrapper">
      <div class="left">
        <img src="@/assets/images/WechatIMG318.jpeg" />
        <span>中酒公众号</span>
      </div>
      <div class="right">
        <span>中国中酒公众号</span>
        <span>关注我们，了解更多咨询与活动</span>
      </div>
    </div>
    <div class="code-wrapper second">
      <div class="right">
        <span>中酒小程序</span>
        <span>可以已最优惠的价格进行选购商品</span>
      </div>
      <div class="left">
        <img src="@/assets/images/WechatIMG319.jpeg" />
        <span>中酒小程序</span>
      </div>
    </div>
  </div>
  <div v-else class="mobile-contact-container">
    <div class="contact-wrapper">
      <div class="contact-content">
        <h3 class="contact-title">400-999-0988</h3>
        <span>咨询电话</span>
      </div>
      <div class="mail">
        <n-icon :component="MailOutline" />
        <span>广告部邮箱：</span>
        <span>panxiaowh@163.com</span>
      </div>
    </div>
    <div class="contact-us">关注中酒获得更多动态</div>
    <div class="code-wrapper">
      <div class="left">
        <img src="@/assets/images/WechatIMG318.jpeg" />
        <span>中酒公众号</span>
      </div>
      <div class="right">
        <span>关注我们，了解更多咨询与活动</span>
      </div>
    </div>
    <div class="code-wrapper">
      <div class="left">
        <img src="@/assets/images/WechatIMG319.jpeg" />
        <span>中酒小程序</span>
      </div>
      <div class="right">
        <span>可以已最优惠的价格进行选购商品</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pc-contact-container {
  @apply w-[86vw] flex flex-col items-center justify-center mx-auto my-[3.75rem];
  .contact-detail {
    @apply flex items-center;
    .left {
      @apply h-[3.75rem] mr-8;
      img {
        @apply h-full drop-shadow-xl;
      }
    }

    .right {
      .contact-content,
      .mobile-contact-container .contact-content {
        @apply flex flex-col items-start;
        .contact-title {
          @apply text-[32px] font-[500] text-[#373c3f] text-center;
        }

        span {
          @apply text-sm text-[#969696] text-center;
        }
      }

      .mail {
        @apply flex items-center mt-[.5rem];
        span {
          @apply ml-[.5rem] text-sm text-[#343434];

          &:last-child {
            @apply ml-[.15rem];
          }
        }
      }
    }
  }

  .code-wrapper {
    @apply flex items-center mt-[4.5rem] bg-[#F5F5F5] w-[64vw] h-[16rem] p-[5rem] rounded-[.25rem];

    &.second {
      @apply justify-end;

      .right {
        @apply mr-[5rem];
      }
    }

    .left {
      @apply flex flex-col items-center mr-[2.5rem];
      img {
        @apply h-[8.75rem] mb-[.5rem];
      }
      span {
        @apply text-sm text-[#969696] mt-3;
      }
    }

    .right {
      @apply flex flex-col items-start;
      span {
        @apply text-sm text-[#969696];
        &:last-child {
          @apply mt-[.5rem];
        }
      }
    }
  }
}

.mobile-contact-container {
  @apply flex flex-col;

  .contact-wrapper {
    @apply w-[86vw] mx-auto my-[1.5rem] h-[300px] shadow-[0_0_8px_10px_rgba(0,0,0,0.1)];

    .contact-content {
      @apply flex flex-col items-center justify-center h-[150px];
      .contact-title {
        @apply text-[32px] font-[500] text-[#373c3f] text-center;
      }

      span {
        @apply text-sm text-[#969696] text-center;
      }
    }

    .mail {
      @apply flex items-center justify-center h-[150px] border-t-[1px] border-[#E5E5E5];
      span {
        @apply text-sm text-[#969696];

        &:first-of-type {
          @apply ml-[.25rem];
        }
      }
    }
  }

  .contact-us {
    @apply w-[50vw] mx-auto mb-6 shadow-lg text-sm py-2 rounded-3xl mt-2 flex items-center justify-center text-white bg-[#c59d4a];
  }

  .code-wrapper {
    @apply flex items-center mx-auto  w-[86vw] h-[10rem] p-[.5rem] rounded-[.25rem];

    .left {
      @apply flex flex-col items-center mr-[2.5rem];
      img {
        @apply h-[6rem] w-[6rem] mb-[.5rem];
      }
      span {
        @apply text-sm text-[#969696];
      }
    }

    .right {
      @apply flex flex-col items-start;
      span {
        @apply text-sm text-[#969696];
        &:last-child {
          @apply mt-[.5rem];
        }
      }
    }
  }
}
</style>
