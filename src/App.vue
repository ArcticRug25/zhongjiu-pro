<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'
import MainLayout from './layouts/MainLayout.vue'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    // primaryColor: '#FF434F'
  },
  Button: {
    textColor: '#E7E9EC'
  }
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <MainLayout>
      <router-view></router-view>
    </MainLayout>
  </NConfigProvider>
</template>

<style scoped></style>
