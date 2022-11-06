<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="w-screen h-screen relative">
    <n-layout position="absolute">
      <n-layout-header class="lg:h-[5.625rem] h-14 w-screen">
        <Navbar />
      </n-layout-header>
      <n-layout position="absolute" class="layout-content">
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
