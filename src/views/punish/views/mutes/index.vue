<template>
    <div class="container">
        <div class="button_container" v-if="route.query.id == null">
          <button class="button-text" @click="goto('/punish?type=bans')">封禁</button>
          <button class="button-text" disabled>禁言</button>
          <button class="button-text" @click="goto('/punish?type=warns')">警告</button>
        </div>
        <mutes v-if="route.query.id == null && route.query.id == undefined" />
        <muteinfo v-if="route.query.id !== null && route.query.id !== undefined" />
    </div>
</template>

<script setup lang="ts">
import mutes from "./mutes.vue";
import muteinfo from "./muteinfo.vue";
import { useRoute } from 'vue-router';
import router from "@/router";

const route = useRoute();

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