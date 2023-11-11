<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar/index.vue'
import Footer from './components/Footer/index.vue'
</script>