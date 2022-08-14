<script setup lang="ts">
import type { UseScrollReturn } from '@vueuse/core'
import { useScroll } from '@vueuse/core'
import { vScroll } from '@vueuse/components'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

function onScroll(state: UseScrollReturn) {
  console.log(state) // {x, y, isScrolling, arrivedState, directions}
}

const { x, y, isScrolling, arrivedState, directions } = useScroll(document)
</script>

<template>
  <div v-scroll="onScroll" class="h-[50000px]">
    <n-layout>
      <n-layout-header><Navbar /></n-layout-header>
      <n-layout-content ref="mainAppRef">
        {{ y }}
        <slot></slot>
      </n-layout-content>
      <n-layout-footer><Footer /></n-layout-footer>
    </n-layout>
  </div>
</template>

<style scoped></style>
