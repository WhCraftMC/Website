<template>
    <main class="mdui-theme-auto">
        <Navbar />
        <auth />
    </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar/index.vue';
import auth from './views/auth/index.vue';
</script>