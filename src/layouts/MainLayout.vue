<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

const { x, y, isScrolling, arrivedState, directions } = useScroll(document)
</script>

<template>
  <div>
    <n-layout>
      <n-layout-header position="absolute">
        <Navbar />
      </n-layout-header>
      <n-layout-content>
        <slot></slot>
      </n-layout-content>
      <n-layout-footer>
        <Footer />
      </n-layout-footer>
    </n-layout>
  </div>
</template>

<style scoped></style>
