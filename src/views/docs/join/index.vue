<template>
	<div class="join">
		<section class="join-section" style="background-image: url(&quot;/images/banners/original_image.jpg&quot;);">
			<h2>关于</h2>
		</section>

		<main>
			<div class="container">
				<h1>开始之前</h1>
                <p>本章节需要你有一定的电脑/手机基础，并且对其有完全的控制权。</p>
                <p>请准备：</p>
                <li>一台可用的电脑或可用的Android手机。</li>
                <li>可用且通畅的网络。</li>
                <li>对于电脑端: 一个可用的启动器。</li>
                <li>对于手机端: 一个可用的符合 <router-link to="/docs/">要求</router-link> 的客户端。</li>
                <h1>电脑端</h1>
                <p>你可以使用任意启动器启动国际Java，如PCL、HCML、BakaXL等，本篇使用HCML作为举例。</p>
                <h2>启动你的游戏</h2>
                <p>点击 "启动游戏" 后等待游戏启动</p>
                <img src="../../../assets/images/docs/000-how_join/000-start_game.png" alt="启动游戏" loading="lazyload"/>
                <h2>添加服务器</h2>
                <p>进入游戏后点击 "多人游戏"</p>
                <img src="../../../assets/images/docs/000-how_join/001-join_add000.png" alt="点击多人游戏" loading="lazyload"/>
                <p>点击 "添加服务器"</p>
                <img src="../../../assets/images/docs/000-how_join/001-join_add001.png" alt="点击添加服务器" loading="lazyload"/>
                <p>在 "服务器地址栏" 填入服务器IP,可<router-link to="docs/getserverip" class="boldfonts">在此</router-link>获取服务器IP。</p>
                <img src="../../../assets/images/docs/000-how_join/001-join_add002.png" alt="填入服务器地址" loading="lazyload"/>
                <p>点击 "完成" 保存配置。</p>
                <img src="../../../assets/images/docs/000-how_join/001-join_add003.png" alt="点击保存配置" loading="lazyload"/>
                <p>点击 "服务器图标" 两次进入服务器。</p>
                <img src="../../../assets/images/docs/000-how_join/001-join_add004.png" alt="加入服务器" loading="lazyload"/>

                <h1>手机端</h1>
                手机端(即基岩)，可以直接加入服务器。
                <h2></h2>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.join {
  background: #323232;
  height: 100%;

  .join-section {
    background: rgb(54, 54, 54) url(../../assets/images/banners/original_image.jpg);
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

@media (max-width: 768px) {
  .join main .container img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .join main .container img {
    width: 90%;
  }
}

@media (min-width: 992px) {
  .join main .container img {
    width: 75%;
  }
}

@media (min-width: 1200px) {
  .join main .container img {
    width: 55%;
  }
}
</style>