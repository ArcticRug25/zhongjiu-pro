<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="main-app">
    <Navbar />
    <slot></slot>
    <Footer />
  </div>
</template>

<style scoped></style>
