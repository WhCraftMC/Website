<template>
    <div class="NotFound-container bg-wool-dark">
        <h2>404 页面不存在</h2>
        <router-link to="/" class="button-text">返回首页</router-link>
    </div>
</template>

<style scoped lang="scss">
.NotFound-container {
  height: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  color: white;

  h2 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }
}
</style>