<template>
    <footer class="footer mcui-blackground-wool-dark">
	    <div>
		    <p class="copyright">Copyright&nbsp;&copy;&nbsp;{{ year }}&nbsp;-&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ copym }}</p>
        <a v-if="ICP" class="icp" :href="ICPURL" target="_blank">{{ ICP }}</a>
	    </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const year = ref(import.meta.env.VITE_FT_STARTYEAR);
const ICP = ref(import.meta.env.VITE_FT_ICP);
const copym = ref(import.meta.env.VITE_FT_COPYRIGHT);
const ICPURL = ref(import.meta.env.VITE_FT_ICPURL);
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 1.6rem 0 2.1rem 0;
  text-align: center;

  .copyright {
    color: hsl(0, 0%, 60%);
    font-size: 1rem;
    text-decoration: none;
  }

  .icp {
    color: hsl(0, 0%, 60%);
    font-size: 1rem;
    text-decoration: none;
  }
}
</style>