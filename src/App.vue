<template>
  <NavBar/>
  <RouterView />
  <Footer/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar/index.vue'
import Footer from './components/Footer/index.vue'

console.log("帅！ooto (凤鸣)");
console.log("Code by WhCraft/rumble")
console.log("MD一个人写网站累撕了")
</script>