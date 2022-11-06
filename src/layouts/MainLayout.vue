<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

const { x, y, isScrolling, arrivedState, directions } = useScroll(document)
</script>

<template>
  <div class="w-screen h-screen relative">
    <n-layout position="absolute">
      <n-layout-header class="h-[5.625rem] w-screen">
        <Navbar />
      </n-layout-header>
      <n-layout position="absolute" style="top: 5.625rem">
        <slot></slot>
        <Footer />
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped></style>
