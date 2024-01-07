<template>
    <div class="NotFound-container">
        <h2>404 NotFound</h2>
        <p>页面被吃掉啦！</p>
        <router-link to="/" class="button-text">返回首页</router-link>
    </div>
</template>

<style scoped lang="scss">
.NotFound-container {
  height: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  color: white;

  h2 {
    font-size: 2.2rem;
    padding-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    padding-bottom: 2rem;
  }
}
</style>