<template>
    <div class="mdui-progress-determinate dh" v-if="show" :style="{width: progress + '%'}"></div>
</template>

<style scoped lang="scss">
.dh {
    height: 4px;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      progress: 0,
      ok: false,
      show: true
    }
  },
  mounted() {
    setInterval(() => {
      if (this.progress < 90) {
        this.progress += Math.floor(Math.random() * (20 - 1 + 1) + 1);
      }
      if (this.ok) {
        this.progress = 100;
        setTimeout(() => {this.show = false}, 500);
      }
    }, 500)
  },
  methods: {
    // 更新进度条
    updateProgress(value: any) {
      this.progress = value
    }
  }
}
</script>