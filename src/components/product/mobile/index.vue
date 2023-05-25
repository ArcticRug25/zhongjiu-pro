<script setup lang="ts"></script>

<template>
  <div class="product">
    <div class="product-name">中酒 · 初心</div>
    <div class="product-img">
      <img src="@/assets/images/home-product.png" />
    </div>
    <div class="product-infos">
      <div class="product-specification">
        <div class="specification-item">
          <div>
            <span>100</span>
            <span>ml</span>
          </div>
          <span>规格</span>
        </div>
        <div class="specification-item">
          <div>
            <span>40</span>
            <span>%vol</span>
          </div>
          <span>酒精度</span>
        </div>
        <div class="specification-item">
          <div>
            <span>666</span>
            <span>元</span>
          </div>
          <span>市场零售价</span>
        </div>
      </div>
      <div class="product-taste">
        <span>【口感品鉴】</span>
        <p>本味清香，入口柔和，余味清爽。</p>
      </div>
      <div class="product-taste">
        <span>【整体感受】</span>
        <p>酒色清亮透明，清新的青草香中带有自然的苹果香和蜂蜜香，入口柔顺，纯净舒适。</p>
      </div>
      <div class="product-taste">
        <span>【产品介绍】</span>
        <p>
          江小白经典产品升级，口感更纯更柔更容易入口，回甘更明显，纯味清香，辛辣烈之外的另一种好酒。
          经典语录加小瓶独立装设计，人手一瓶，够公平，无处不在，轻松易得。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  @apply flex flex-col justify-evenly box-border px-[5%];
  .product-name {
    @apply text-[25px] text-[#1d1d1e] font-bold text-center;
  }
  .product-img {
    @apply max-h-[20rem] overflow-hidden;

    img {
      @apply w-full h-full object-contain transition-all duration-500;

      &:hover {
        transform: scale(1.25);
      }
    }
  }

  .product-infos {
    .product-specification {
      @apply flex justify-between my-[1rem] mb-[2rem];
      .specification-item {
        @apply flex flex-col justify-center items-center;
        div {
          span {
            @apply text-[#343434] font-bold text-[17px];

            &:last-child {
              @apply font-[400] text-[12px];
            }
          }
        }

        span {
          @apply font-[400] text-[12px];
        }
      }
    }

    .product-taste {
      span {
        @apply text-black text-base block my-2;
      }
      p {
        @apply text-[#7a7a7a] mb-[2rem];
      }
    }
  }
}
</style>
