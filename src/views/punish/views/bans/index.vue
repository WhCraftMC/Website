<template>
    <div class="container">
        <div class="button_container" v-if="route.query.id == null">
          <button class="button-text" disabled>封禁</button>
          <button class="button-text" @click="goto('/punish?type=mutes')">禁言</button>
          <button class="button-text" @click="goto('/punish?type=warns')">警告</button>
        </div>
        <bans v-if="route.query.id == null && route.query.id == undefined" />
        <baninfo v-if="route.query.id !== null && route.query.id !== undefined" />
    </div>
</template>

<script setup lang="ts">
import bans from "./bans.vue";
import baninfo from "./baninfo.vue";
import { useRoute } from 'vue-router';
import router from "@/router";

const route = useRoute();
const userId = route.query.id;

function goto(url: string) {
  router.push(url);
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