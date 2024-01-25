<template>
	<div class="getsip">
		<section>
			<h2>服务器IP&要求</h2>
      <p>本章讲述了服务器对客户端的要求。</p>
		</section>

		<main>
			<article class="container">
				<h1>获取服务器IP</h1>
          <p>在这里获取服务器最新IP，可以点击地址复制。</p>
          <h2>Java</h2>
            <p>IP地址: <spawn @click="copyUrl(jip);">{{ `${jip}` }}</spawn></p>
            <br>

          <h2>基岩</h2>
            <p>IP地址: <spawn @click="copyUrl(bip);">{{ bip }}</spawn></p>
            <p>端口: <spawn @click="copyUrl(bpr);">{{ bpr }}</spawn></p>
            <br>

        <h1>对客户端要求</h1>
          <p>在这里获取对客户端版本的要求</p>
          <br>
          <h2>Java</h2>
            <p>版本要求: 1.8-1.20.2任意版本</p>
            <p>不支持安装非仅客户端Mod的客户端进入插件/原版生存服。</p>
            <br>
          <h2>基岩</h2>
            <p>版本要求: 1.20.xx.xx</p>
			</article>
		</main>
	</div>

</template>

<script setup lang="ts">
const jip = "mc.whcraft.top"
const bip = "mc.whcraft.top"
const bpr = "19132"
const jpr = "25565"

function copyUrl(val: string) {
    navigator.clipboard.writeText(val);
}
</script>

<style scoped lang="scss">
.getsip {
  background: #323232;
  height: 100%;

  .getsip-section {
    background: rgb(54, 54, 54) url(friendURL/images/banners/other_early_console_era.jpg);
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
    height: 200%;
  
    .container {
      display: flex;
      gap: 1rem;
      color: white;
      flex-direction: column;
      align-items: flex-start;
      width: 75%;

      h1 {
        margin: 0;
        font-size: 2.2rem;
      }

      h2 {
        margin: 0;
        font-size: 1.8rem;
      }

      h3 {
        margin: 0;
        font-size: 1.4rem;
      }

      h4 {
        margin: 0;
        font-size: 1.0rem;
      }

      h5 {
        margin: 0;
        font-size: 0.6rem;
      }

      h6 {
        margin: 0;
        font-size: 0.2rem;
      }

      li {
        margin: 0;
      }

      a {
        color: white;
        font-size: 1rem;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
      }

      img {
        object-fit: contain;
        max-width: 100vw;
      }
    }
  }

  hr {
    border-color: rgb(146, 146, 146);
    margin: 0.4rem 0;
  }
}
</style>