<template>
	<div class="join">
		<section>
			<h2>如何加入服务器</h2>
      <p>本章讲述了如何游玩服务器。</p>
		</section>

		<main>
			<article class="container">
        <h1>注意</h1>
        <p>游玩本服务器要求您阅读并了解了<a href="" target="_blank">我们的Eula</a></p>
				<h1>开始之前</h1>
          <p>本章节需要你有一定的电脑/手机基础，并且对其有完全的控制权。</p>
          <p>请准备：</p>
          <li>一台可用的电脑或可用的Android手机。</li>
          <li>可用且通畅的网络。</li>
          <li>对于电脑端: 一个可用的启动器。</li>
          <li>对于手机端: 一个可用的符合 <router-link to="/docs/getserverip">要求</router-link> 的客户端。</li>
          <br>
          <h1>电脑端</h1>
          <p>你可以使用任意启动器启动国际Java，如PCL、HCML、BakaXL等，本篇使用HCML作为举例。</p>
          <h2>添加服务器</h2>
          <p>参考以下视频，由于一些原因，服主无法使用官网地址访问服务器，实际效果参考下图。</p>
          <video controls autoplay>
            <source src="videos/play-java.mp4" type="video/mp4">
            您的浏览器不支持 video 属性。
          </video>

          <h1>手机端</h1>
          手机端(即基岩)，可以直接加入服务器。
          <h2>添加服务器</h2>
          <p>点击 "游戏"</p>
          <img src="@/assets/images/docs/000-how_join/002-add_000.png" alt="点击游戏"/>
          <p>点击 "服务器" 然后滑动到最底部点击 "添加服务器"</p>
          <img src="@/assets/images/docs/000-how_join/002-add_004.png" alt="点击服务器"/>
          <p>在 "服务器名称" 栏填入你想要填入的服务器名称，在 "服务器地址" 栏填入服务器IP，在 "端口" 栏修改端口，可<router-link to="docs/getserverip" class="boldfonts">在此</router-link>获取服务器IP。</p>
          <img src="@/assets/images/docs/000-how_join/002-add_001.png" alt="填入服务器信息"/>
          <p>点击 "保存" 或 "游戏"</p>
          <img src="@/assets/images/docs/000-how_join/002-add_002.png" alt="点击保存"/>
          <p>点击服务器， 点击 "加入服务器"</p>
          <img src="@/assets/images/docs/000-how_join/002-add_003.png" alt="点击游戏"/>
			</article>
		</main>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.join {
  background: #323232;
  height: 100%;

  .section {
    background: rgb(54, 54, 54) url(friendURL/images/banners/original_image.jpg);
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