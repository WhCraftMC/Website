<template>
	<div class="punish">
		<section class="punish-section" style="background-image: url(&quot;/images/banners/other_early_console_era.jpg&quot;);">
			<h2>处罚列表</h2>
      <p>你可以在这里找到所有的处罚信息</p>
		</section>
		<main>
			<div class="container">
				<bans v-if="route.query.type !== 'mutes' && route.query.type !== 'warns'" />
        <mutes v-if="route.query.type == 'mutes'" />
        <warns v-if="route.query.type == 'warns'" />
      </div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import bans from '@/views/punish/views/bans/index.vue'
import mutes from '@/views/punish/views/mutes/index.vue'
import warns from '@/views/punish/views/warns/index.vue'

const route = useRoute();
</script>

<style scoped lang="scss">
.punish {
  background: #323232;
  height: 100%;

  .punish-section {
    background: rgb(54, 54, 54) url(../../assets/images/banners/1.0_pocket_edition.jpg);
    background-color: #00000069;
    background-blend-mode: multiply;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    height: calc(31vh - 60px);
    display: flex;
    place-content: center;
    place-items: center;
    flex-direction: column;
    text-align: center;
    height: 250px;

    h2 {
      font-family: 'MinecraftFiveBold';
      color: white;
      font-size: 1.9rem;
      text-shadow: 0 4px 0 rgb(48, 48, 48);
      font-weight: 100;
      font-style: normal;
    }
  
    p {
      font-family: 'MinecraftFiveBold';
      color: white;
      text-shadow: 0 3px 0 rgb(48, 48, 48);
      font-weight: 100;
      font-style: normal;
      font-size: 1.2rem;
    }
  }
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    height: max-content;
    overflow: hidden;
    height: 100%;
  
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      color: white;
      width: 100%;
    }
  }

  hr {
    border-color: rgb(146, 146, 146);
    margin: 0.4rem 0;
  }
}
</style>