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

  <main class="mcui-blackground-wool-dark">
    <div class="mcui-br-blackground-wool-dark"></div>
    <div class="mcui-br-blackground-wool-dark"></div>

    <div class="mcui-background-wool-light about">
      <div class="woolbgTop mcui-background-trans-to-light"></div>

      <div class="about-container">
        <div class="row">
          <div class="col-1">
            <h2>WhCraft欢迎您</h2>
              <p>
                &nbsp;&nbsp;这是一个温馨和谐的服务器，提供了稳定流畅的体验，
                自从2019首次开服以来我们努力创建一个环境良好更公平公正的游戏氛围，
                和玩家们一起度过了很多愉快的时光,在这里的日子将会是你值得回忆的美好。<br>
                &nbsp;&nbsp;我们保证不做影响平衡、破坏公平的行为。服务器暂时不开放白名单，欢迎玩家
                提出意见或者举报违规行为，请大家自觉遵守游戏规则。<br><br>
                <router-link class="boldfonts" to="/docs/about">阅读更多</router-link>
              </p>
              <p class="testimonial-text" id="poem-text"></p>
              <font color="#484a46"><p id="poem-author" style="font-weight: bold"></p></font>
          </div>
          <div class="col-2">
            <img src="src/assets/images/about-image.png" class="img"/>
          </div>
      </div>
      </div>

      <div class="woolbgBot mcui-background-trans-to-dark"></div>
    </div>

    <div class="mcui-br-blackground-wool-dark"></div>
    <div class="mcui-br-blackground-wool-dark"></div>

  	<div class="news">
	  	<div class="news-container">
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

    <div class="mcui-br-blackground-wool-dark"></div>
    <div class="mcui-br-blackground-wool-dark"></div>

    <div class="mcui-background-wool-light info">
      <div class="woolbgTop mcui-background-trans-to-light"></div>

      <h1>服务器简介</h1><br><br>

      <div class="row">
        <div class="items mcui-blackground-wool-dark">
          <h6><i class="mdui-icon material-icons" style="font-size:5em">accessible</i></h6>
          <div class="text">
            <h4>性能强劲*</h4>
            <p>服务器采用E5处理器，32G运行内存，尽可能的让您的游戏更加稳定流畅。</p>
          </div>
        </div>

        <div class="items mcui-blackground-wool-dark">
          <h6><i class="mdui-icon material-icons" style="font-size:5em">grain</i></h6>
          <div class="text">
            <h4>玩法多样</h4>
            <p>目前已经开放数据包插件生存和插件空岛生存两个服务器。</p>
          </div>
        </div>

        <div class="items mcui-blackground-wool-dark">
          <h6><i class="mdui-icon material-icons" style="font-size:5em">games</i></h6>
          <div class="text">
            <h4>跨设备游玩*</h4>
            <p>身边没有电脑？我们支持使用MC基岩版加入服务器，但因存在兼容性问题，强烈建议仅将其作为备用方式。</p>
          </div>
        </div>

        <div class="items mcui-blackground-wool-dark">
          <h6><i class="mdui-icon material-icons" style="font-size:5em">directions_run</i></h6>
          <div class="text">
            <h4>放牛式管理</h4>
            <p>不禁止刷怪塔、红石农场、密集养殖，仅禁止恶意卡服行为。</p>
          </div>
        </div>

        <div class="items mcui-blackground-wool-dark">
          <h6><i class="mdui-icon material-icons" style="font-size:5em">date_range</i></h6>
          <div class="text">
            <h4>玩法多样</h4>
            <p>服务器永远也不会更换周目，若遭遇不可抗力需要更换周目，会公开存档下载。</p>
          </div>
        </div>
        
        <div class="items mcui-blackground-wool-dark">
          <h6><i class="mdui-icon material-icons" style="font-size:5em">attach_money</i></h6>
          <div class="text">
            <h4>公益免费</h4>
            <p>本服承诺保证公平公正，保证所有玩家的生存体验，绝不会让您充值亿分钱。</p>
          </div>
        </div>

        </div>
      <div class="woolbgBot mcui-background-trans-to-dark"></div>
    </div>

    <div class="mcui-br-blackground-wool-dark"></div>

    <div class="mcui-background-wool-dark server-list">
      <h1>服务器列表</h1>
      <h2>多种玩法提供选择</h2>

      <br><br>

      <div class="row">
        <div class="card">
          <img src="https://www.wybserver.link/static/picture/a4VLNR.jpg" class="img"/>
          <div class="text">
            <h2>数据包生存</h2>
            <p>类原版高版本生存服务器，保留原汁原味玩法，享受养老生活。</p>
            <br><br>
            <button class="button-text" disabled>查看状态</button>
          </div>
        </div>

        <div class="card">
          <img src="https://www.wybserver.link/static/picture/a4VLNR.jpg" class="img"/>
          <div class="text">
            <h2>空岛生存</h2>
            <p>经典空岛生存服务器，保留原汁原味空岛玩法。</p>
            <br><br>
            <button class="button-text" disabled>正在开发</button>
          </div>
        </div>

        <div class="card">
          <img src="https://www.wybserver.link/static/picture/a4VLNR.jpg" class="img"/>
          <div class="text">
            <h2>？？？</h2>
            <p>没想好做什么。</p>
            <br><br>
            <button class="button-text" disabled>未开服</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mcui-br-blackground-wool-dark"></div>
  </main>
</template>

<script setup lang="ts">
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

@media screen and (max-width: 990px) {
  .about .about-container .row {
    flex-wrap: wrap;
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

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100%;
  color: var(--dark-text-color);

  .row {
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding-right: 15%;
    padding-left: 15%;

    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--main-text-color);
      border-radius:15px;
      padding-right: 8px;
      padding-left: 8px;
      margin: 5px;
      min-width: 33%;
      flex: 1;

      h6 {
        margin-top: 1.2em;
        margin-bottom: .6em;
        font-size: 1.1em;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 6px 6px;

        h4 {
          font-size: 1.4em;
          margin-top: 1.2em;
          margin-bottom: .6em;
          text-wrap: nowrap;
        }
        p {
          margin-top: 1.2em;
          margin-bottom: .6em;
          text-wrap: wrap;
        }
      }
    }
  }
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100%;
  color: var(--dark-text-color);

  .about-container {
    .row {
      display: flex;

      padding-right: 15%;
      padding-left: 15%;

      .col-1 {
        padding-right: 15px;

        h2 {
          margin-bottom: 1.375rem;
        }

        p {
          color: #787976;
          font: 400 1rem/1.25rem "No Sans", sans-serif;
        }

        a {
          color: #787976;
          font: 400 1rem/1.25rem "No Sans", sans-serif;
          text-decoration: none;

          &:hover {
              text-decoration: underline;
          }
        }
      }

      .col-2 {
        display: flex;

        .img {
          max-width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

.server-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-height: 100%;
  color: var(--main-text-color);
  .row {
    display: flex;

    .card {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;

      max-width: 18.25rem;
      display: inline-block;
      vertical-align: top;

      margin: 5px;
      background-image: url(https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/feature-content/bg-wool-light.png);

      border-radius: 0.375rem;

      min-height: 400px;
      max-height: 400px;
      border-bottom-left-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;

      .img {
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        max-width: 100%;
        height: auto;
      }
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;

        color: var(--dark-text-color);

        padding: 2.25rem 2rem 2.125rem 2rem;
        border: 1px solid #ebe8e8;
      }
    }
  }
}

.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  height: 100%;
  color: white;

  .news-container {

    .heading {
      display: flex;
      justify-content: center;
      max-width: 100vw;

      margin-top: 16px!important;
      margin-bottom: 16px!important;

      h2 {
        font-size: 28px;
        margin-left: 6px!important;
        margin-right: 6px!important;
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
}
</style>