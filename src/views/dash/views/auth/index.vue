<template>
  <div class="auth-main">
    <Login />
  </div>
</template>

<script setup lang="ts">
import Login from './components/login.vue';
</script>

<style scoped lang="scss">
.auth-main {
  display: flex;

  //background: url(https://api.imlazy.ink/img/);
  //background-size: cover;

  flex-direction: column;
  align-items: center;
  justify-content: center; 

  width: 100vw;
  height: 100vh;
}
</style>