<template>
	<div class="main-section">
    <img src="@/assets/images/logos/noicon.logo.png" alt="logo" class="logo">
		<h2>Minecraft 小型群组服</h2>
		<div class="arrow-scroll" @click="scroolDown">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16pt" height="16pt" class="arrow-down" style="isolation: isolate;">
				<defs>
					<clipPath id="_clipPath_HfXw3Q4bGMm3eEPXaVMzS4LKsql5efcC">
						<rect width="16" height="16"></rect>
					</clipPath>
				</defs>
				<g clip-path="url(#_clipPath_HfXw3Q4bGMm3eEPXaVMzS4LKsql5efcC)">
					<path d=" M 12 6 L 11 6 L 11 7 L 10 7 L 10 8 L 9 8 L 9 9 L 7 9 L 7 8 L 6 8 L 6 7 L 5 7 L 5 6 L 4 6 L 4 5 L 1 5 L 1 6 L 2 6 L 2 7 L 3 7 L 3 8 L 4 8 L 4 9 L 5 9 L 5 10 L 6 10 L 6 11 L 10 11 L 10 10 L 11 10 L 11 9 L 12 9 L 12 8 L 13 8 L 13 7 L 14 7 L 14 6 L 15 6 L 15 5 L 12 5 L 12 6 Z " fill="rgb(255,255, 255)"></path>
				</g>
			</svg>
    </div>
	</div>

  <main>
  	<div class="news bg-wool-dark">
	  	<div class="container">
        <div class="heading">
          <h2>最新消息</h2>
        </div>
        <div class="slick-track">
          <div class="news-card">
            <img src="https://www.minecraft.net/content/dam/games/minecraft/screenshots/nautilusshell-car.jpg" alt="news-img">
            <h3>更新: 服务器更新至1.13 (填充文本)</h3>
            <p>2021-05-12 - 怎么一回事?</p>
          </div>
          <div class="news-card">
            <img src="https://www.minecraft.net/content/dam/games/minecraft/screenshots/cow-car.jpg" alt="news-img">
            <h3>更新: 牛子(填充文本)</h3>
            <p>2022-06-18 - 怎么一回事?</p>
          </div>
          <div class="news-card">
            <img src="https://www.minecraft.net/content/dam/games/badger/screenshots/Spookyfest_carousel.jpg" alt="news-img">
            <h3>活动: 苦力怕之年(填充文本)</h3>
            <p>2022-01-10 - 怎么一回事?</p>
          </div>
        </div>
		  </div>
	  </div>
  </main>
</template>

<script setup lang="ts">
import Hitokoto from '@/utils/HitokotoUtils';

function scroolDown() {
  window.scrollTo(0, window.innerHeight);
}
</script>

<style scoped lang="scss">
.main-section {
  position: relative;
  background: url(https://api.imlazy.ink/mcapi/mcbg.php);
  background-size: cover;
  background-color: #00000090;
  background-blend-mode: multiply;
  background-position: 50%;
  background-repeat: no-repeat;
  height: calc(100vh);
  overflow-y: auto;

  .arrow-down {
    width: 30px;
    height: 30px;
  }

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  text-align: center;

  h2 {
    padding: 1rem 0;
    text-shadow: 0 2.5px 0 #000000;
    color: white;
    word-spacing: 5px;
    font-size: 1.5rem;
    line-height: 1.5rem;
    width: 85%;
    font-weight: 100;
    font-style: normal;
  }

  h3 {
    padding: 1rem 0;
    text-shadow: 0 2.5px 0 #000000;
    color: white;
    word-spacing: 5px;
    font-size: 1.1rem;
    line-height: 1.5rem;
    width: 85%;
    font-weight: 100;
    font-style: normal;
  }

  .logo {
    max-width: 660px; 
    width: 660px;
    margin-bottom: 1.8rem;
  }
}

.arrow-scroll {
  position: absolute;
  bottom: 3rem;

  svg {
    width: 40px;
    height: 40px;
    animation: scrollArrowAnim 1000ms infinite ease;
  }
}

@media screen and (max-height: 700px) and (max-width: 400px) {
  .arrow-scroll {
    display: none;
  }
}

@keyframes scrollArrowAnim {
  0% {
    transform: translateY(-15px);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(-15px);
  }
}

@media screen and (max-width: 800px) {
  .main-section {
    .logo {
      max-width: 660px; 
      width: 70%;
    }

    .buttons-group0,
    .buttons-group1 {
      width: 85%;
    }
  }
}

.home-show-sections {
  background: #323232;

  .container {

    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 3rem 0 4rem 0;
    place-items: center;
  }

  .being-built {
    margin: 2rem 0 0 0;
  }
}

@media screen and (max-height: 600px) {
  .main-section .logo {
    max-width: 70%; 
    margin-bottom: 1.8rem;
  }
  
  .main-section h3 {
    padding: 0;
  }
}

@media screen and (max-height: 520px) {
  .main-section .logo {
    display: none;
  }
}

.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  height: 100%;
  color: white;

  .heading {
    display: flex;
    justify-content: center;
    max-width: 100vw;

    h2 {
      font-size: 28px;
      padding-bottom: 2rem;
    }
  }

  .slick-track {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100vw;
    width: 100%;
    height: 100%;

    .news-card {
      display: flex;
      flex: 1 0 15%;
      flex-direction: column;
      align-items: center;
      max-width: 100vw;
      margin: 5px;

      img {
        width: 440px;
        height: 250px;
        object-fit: cover;
        max-width: 100vw;
      }
    }
  }
}
</style>