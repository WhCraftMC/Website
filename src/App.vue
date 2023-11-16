<template>
  <NavBar v-if="!getURL($route.path)"/>
  <RouterView />
  <Footer v-if="!getURL($route.path)"/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar/index.vue'
import Footer from './components/Footer/index.vue'

function getURL(url: string): boolean {
  const path = /^\/dash(\/|$)/;
  return path.test(url);
}
</script>