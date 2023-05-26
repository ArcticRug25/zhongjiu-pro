<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// 监听路由变化滚动到顶部
const router = useRouter()
const mainLayoutRef = ref(null) as any
watch(
  () => router.currentRoute.value,
  () => {
    mainLayoutRef.value?.scrollTo(0, 0)
  }
)
</script>

<template>
  <div class="w-screen h-screen relative">
    <n-layout position="absolute">
      <n-layout-header class="lg:h-[5.625rem] h-14 w-screen">
        <Navbar />
      </n-layout-header>
      <n-layout ref="mainLayoutRef" position="absolute" class="layout-content">
        <slot></slot>
        <Footer />
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped>
.layout-content {
  @apply top-14;
  @apply lg:top-[5.625rem];
}
</style>
