<template>
    <div class="container">
        <div class="button_container" v-if="route.query.id == null">
          <button class="button-text" @click="goto('/punish?type=bans')">封禁</button>
          <button class="button-text" @click="goto('/punish?type=mutes')">禁言</button>
          <button class="button-text" disabled>警告</button>
        </div>
        <warns v-if="route.query.id == null && route.query.id == undefined" />
        <warninfo v-if="route.query.id !== null && route.query.id !== undefined" />
    </div>
</template>

<script setup lang="ts">
import warns from "./warns.vue";
import Warninfo from "./warninfo.vue";
import { useRoute } from 'vue-router';

const route = useRoute();
function goto(url: string) {
  window.location.href = url;
}
</script>

<style scoped lang="scss">
.container {
    .button_container {
        display: flex;

        button {
          margin: 10px;
        }
    }
}
</style>