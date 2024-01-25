<template>
	<div class="about">
		<section>
			<h2>关于</h2>
      <p>关于我们</p>
		</section>

		<main>
			<article class="container">
        <div class="about">
				  <h1>服务器介绍</h1>
            <p>我们的服务器是一个完全公益的Minecraft社区，我们坚持无付费内容，仅接受无条件捐赠来维持服务器开销。我们相信每个玩家都应该享受到公平和友善的游戏环境，而不受区别对待。</p>
            <br>

            <h2>服务器特色</h2>
              <p><span class="boldfonts">无付费内容:</span>我们提供免费的Minecraft游戏体验，没有任何真实付费商城或其他付费内容。每个玩家都从零开始，自行探索、建造和发展。</p>
              <p><span class="boldfonts">公平竞争:</span>我们重视公平竞争，禁止任何作弊、外挂或不公平行为。我们的管理团队时刻监控服务器，保证每个玩家都能够在公正的环境中竞争和互动。</p>
              <p><span class="boldfonts">无广告宣传:</span>我们坚决不接受任何广告宣传，并为玩家提供一个清爽和纯粹的游戏体验。我们相信Minecraft本身就是一种乐趣，不需要额外付费的干扰。</p>
              <p><span class="boldfonts">无条件捐赠:</span>我们仅接受无条件的捐赠来支付服务器的运行和维护费用。这是出于对玩家之间平等和公平的尊重，确保所有人都能够享受到游戏的乐趣。</p>
              <br>

            <h2>加入我们</h2>
              <p>如果你对公益事业有热情，并渴望在一个纯净、公平和友善的Minecraft社区中畅玩游戏，我们欢迎你加入我们的公益群组服！</p>
              <p>详细信息请阅读: <router-link class="boldfonts" to="/docs/join">如何加入</router-link>。</p>
        </div>
        <div class="us">
          <!-- 团队成员列表 -->
        </div>
			</article>
		</main>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
  background: #323232;
  height: 100%;

  section {
    background: rgb(54, 54, 54) url(/images/banners/1.11_exploration_update_java.jpg);
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