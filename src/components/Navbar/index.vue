<template>
	<header class="navbar">
		<div class="container">
      <!-- Logo -->
			<router-link to="/" class="nav-logo">
				<img src="data:image/png;base64,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" alt="logo">
				WhCraft
			</router-link>

      <!-- 顶部栏 -->
			<nav class="header-nav">
				<ul>
          <!--<button class="hamburger-btn">
            <div v-if="true" style="color: white; text-align: center;">
              <h2 style="padding-left: 5px;"><img src="https://skin.fxcraft.cn/avatar/0?size=36" />bilirumble</h2>
            </div>
            <div style="color: white" v-if="false">
              <h2><i class="mdui-icon material-icons">&#xe853;</i> 请登录</h2>
            </div>
          </button>-->

          <!-- 开关菜单按钮 -->
					<button class="hamburger-btn" @click="toggle">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16pt" height="16pt" style="isolation: isolate;" :class="{hide: isOpen}">
							<defs>
								<clipPath id="_clipPath_F010iMyuMpKQIqOnodEWM47ZJ5QrGyoF">
									<rect width="16" height="16"></rect>
								</clipPath>
							</defs>
							<g clip-path="url(#_clipPath_F010iMyuMpKQIqOnodEWM47ZJ5QrGyoF)">
								<rect width="16" height="16" fill-opacity="0" style="fill: rgb(0, 0, 0);"></rect>
								<path d=" M 15 4 L 15 3 L 0 3 L 0 3 L 0 4 L 1 4 L 1 5 L 16 5 L 16 4 L 15 4 Z  M 15 8 L 15 7 L 0 7 L 0 7 L 0 8 L 1 8 L 1 9 L 16 9 L 16 8 L 15 8 L 15 8 L 15 8 Z  M 15 12 L 15 11 L 0 11 L 0 12 L 1 12 L 1 13 L 16 13 L 16 12 L 15 12 L 15 12 L 15 12 L 15 12 Z  " fill-rule="evenodd" fill="rgb(255,255,255)"></path>
							</g>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16pt" height="16pt" class="cancel-icon" style="isolation: isolate;" :class="{hide: !isOpen}">
							<defs>
								<clipPath id="_clipPath_mQVMvFIZoKmgp5BBGbPd3PpCIfugN0Hp">
									<rect width="16" height="16"></rect>
								</clipPath>
							</defs>
							<g clip-path="url(#_clipPath_mQVMvFIZoKmgp5BBGbPd3PpCIfugN0Hp)">
								<rect width="16" height="16" fill-opacity="0" style="fill: rgb(0, 0, 0);"></rect>
								<path d=" M 1 14 L 1 13 L 2 13 L 2 12 L 3 12 L 3 11 L 4 11 L 4 10 L 5 10 L 5 9 L 6 9 L 6 7 L 5 7 L 5 6 L 4 6 L 4 5 L 3 5 L 3 4 L 2 4 L 2 3 L 1 3 L 1 2 L 0 2 L 0 0 L 2 0 L 2 1 L 3 1 L 3 2 L 4 2 L 4 3 L 5 3 L 5 4 L 6 4 L 6 5 L 7 5 L 7 6 L 9 6 L 9 5 L 10 5 L 10 4 L 11 4 L 11 4 L 11 3 L 12 3 L 12 2 L 13 2 L 13 2 L 13 1 L 14 1 L 14 0 L 14 0 L 16 0 L 16 2 L 15 2 L 15 2 L 15 3 L 14 3 L 14 4 L 13 4 L 13 4 L 13 5 L 12 5 L 12 6 L 11 6 L 11 6 L 11 7 L 10 7 L 10 9 L 11 9 L 11 10 L 12 10 L 12 11 L 13 11 L 13 12 L 14 12 L 14 13 L 15 13 L 15 14 L 16 14 L 16 16 L 14 16 L 14 15 L 14 15 L 14 15 L 14 15 L 14 15 L 14 15 L 14 15 L 13 15 L 13 14 L 12 14 L 12 13 L 11 13 L 11 12 L 10 12 L 10 11 L 9 11 L 9 10 L 7 10 L 7 11 L 6 11 L 6 12 L 5 12 L 5 13 L 4 13 L 4 14 L 3 14 L 3 15 L 2 15 L 2 16 L 0 16 L 0 14 L 1 14 Z " fill="rgb(255,255,255)"></path>
							</g>
						</svg>
					</button>

          <!-- side栏 -->
					<div :class="{sidebar: true,open: isOpen}">
						<div class="link-container">
							<nav>
								<ul>
                  <h1><i class="mdui-icon material-icons"></i>&nbsp;站内链接</h1>
                  <li><RouterLink to="/" class="linkto"><i class="mdui-icon material-icons"></i>&nbsp;首页</RouterLink></li>
                  <li><RouterLink to="/punish" class="linkto"><i class="mdui-icon material-icons"></i>&nbsp;处罚</RouterLink></li>
		  <li><a class="linkto" href="https://status.whcraft.top" target="_blank"><i class="mdui-icon material-icons"></i>&nbsp;服务状态</a></li>
                  <h2><i class="mdui-icon material-icons"></i>&nbsp;&nbsp;文档</h2>
									<li><RouterLink to="/docs/about" class="linkto"><i class="mdui-icon material-icons"></i>&nbsp;关于</RouterLink></li>
                  <li><RouterLink to="/docs/join" class="linkto"><i class="mdui-icon material-icons"></i>&nbsp;如何加入服务器</RouterLink></li>
                  <h2><i class="mdui-icon material-icons"></i>&nbsp;&nbsp;其他</h2>
                  <li><RouterLink to="/docs/donate" class="linkto"><i class="mdui-icon material-icons"></i>&nbsp;捐赠</RouterLink></li>
                  <li><a class="linkto" href="https://bug.whcraft.top" v-if="false"><i class="mdui-icon material-icons"></i>&nbsp;BUG反馈</a></li>
                  
                  <h1><i class="mdui-icon material-icons"></i>&nbsp;站外链接</h1>
                  <li><a class="linkto" href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LKGqhY1rbN-sBSEXD1KI4QEdgDZhqDxj&authKey=KqSa1W1IXnLIUV7dtKJopzYIrLyWryrsfYVMmZkoZlBpu5x%2BwztyHf1oLyQO6jP8&noverify=0&group_code=703062404" target="_blank"><i class="mdui-icon material-icons"></i>&nbsp;加入QQ群</a></li>
                  <li><a class="linkto" href="https://github.com/WhCraftMC" target="_blank"><i class="mdui-icon material-icons"></i>&nbsp;Github</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</ul>
			</nav>
		</div>
    <loading />
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import loading from './loading.vue'

const isOpen = ref(false);
function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped lang="scss">
.navbar {
  background: #262626;
  width: 100%;
  height: 50px;
  position: fixed;
  z-index: 100;
  padding-top: 2px;
  box-shadow: 0 2px 4px #00000077;

  .container {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-around;
  }

  .header-nav {
    height: 100%;

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      height: 100%;
    }
  }
}

.nav-logo {
  width: max-content;
  height: 40px;

  img {
    width: 40px;
    height: 40px;
    margin: 0 1rem 0 0;
  }

  color: white;
  text-decoration: none;
  font-family: 'Minecraft';
  display: flex;
  flex-direction: row;
  text-align: left;
  text-anchor: start;
  place-content: center;
  font-size: 1.1rem;
  place-items: center;
  font-weight: 100;
  font-style: normal;

  &:hover {
    color: rgb(190, 190, 190);
  }

   &:focus-visible {
    outline: none;
    text-decoration: underline;
  }
}

.navbar-link {
  height: 100%;
  display: flex;
  place-items: center;

  svg, img {
    width: 32px;
    height: 32px;
  }

  img {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
  }
}

@keyframes aaab {
  0% { transform: translate(100%); }
  10% { transform: translate(100%); }
  100% { transform: translate(0); }
}

@keyframes aabb {
  0% { transform: translate(0); }
  10% { transform: translate(0); }
  100% { transform: translate(100%); }
}

.navbar-link-cont {
  display: block;
  color: white;
  padding: 0.2rem 0.6rem;
  height: 100%;
  text-decoration: none;
  font-family: 'Minecraft';
  display: flex;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 0;

  &:hover {
    background: hsla(0, 0%, 100%, 0.2);
    span {
      font-size: 1rem;
      margin-left: 0.3rem;
    }
  }

  span {
    transition: font 300ms, margin 300ms;
    font-size: 0;
    margin-left: 0;
  }

  &:focus-visible {
    outline: none;
    border: 1px solid white;
    span {
      font-size: 1rem;
      margin-left: 0.3rem;
    }
  }
}

.hamburger-btn {
  display: flex;
  place-items: center;
  place-content: center;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 0.2rem 0.6rem;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: white;
  }
  
  svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background: #ffffff33;
  }

  &:disabled {
    filter: brightness(60%);
  }
}

.hamburger-btn {
  display: none;
}

@media screen and (max-width: 450px) {
  .nav-logo {
    font-size: 0;
  }
}

.hamburger-btn {
  display: flex;
}

.sidebar {
  display: none;
    &.open {
      display: block;
  }
}

.sidebar {
  position: absolute;
  display: none;
  background: #262626;
  right: -100%;
  top: 50px;
  width: 300px;
  height: calc(100vh - 50px);
  transition: transform 200ms ease;
  z-index: -1;
  overflow-y: auto;
  box-shadow: -2px 0 2px 0 #00000077;
  font-family: 'Noto Sans';

  &::-webkit-scrollbar {
    width: 10px;
  }

  .link-container {
    display: flex;
    width: 100%;
    height: max-content;
    padding: 1rem 0;
    overflow-x: hidden;

    h1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
      font-weight: 100;
      font-size: 1.8rem;
      margin-left: 1.2rem;
      padding: 1.2rem 0 0;
    }

    h2 {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
      font-weight: 100;
      font-size: 1.45rem;
      margin-left: 1.55rem;
      padding: 1.2rem 0 0;
    }
  }

  &.open {
    display: none;
    right: 0;
  }

  nav {
    overflow-y: auto;
    width: 100%;
    overflow-x: hidden;

    h1 {
      color: white;
      font-weight: 100;
      font-size: 2.2rem;
      margin-left: 1.2rem;
      padding: 1.2rem 0 0 0;
    
      &:first-of-type {
        padding-top: 0;
      }
    }

    h2 {
      color: white;
      font-weight: 100;
      font-size: 2.0rem;
      margin-left: 1.2rem;
      padding: 1.2rem 0 0 0;
    
      &:first-of-type {
        padding-top: 0;
      }
    }

    h3 {
      color: white;
      font-weight: 100;
      font-size: 1.8rem;
      margin-left: 1.2rem;
      padding: 1.2rem 0 0 0;
    
      &:first-of-type {
        padding-top: 0;
      }
    }

    h4 {
      color: white;
      font-weight: 100;
      font-size: 1.5rem;
      margin-left: 1.2rem;
      padding: 1.2rem 0 0.7rem 0;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    li {
      width: 100%;
      color: white;
    }

    .linkto {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 0.5rem 2rem;
      color: #2bbd28;
      font-size: 0.95rem;
      text-decoration: none;
      border: 1px solid transparent;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        border-color: #fff;
      }

      &:hover {
        background: #ffffff33;
        color: #fff;
      }
    }
  }
}

.sidebar {
    display: none;
    &.open {
      display: block;
  }
}

.hide {
  display: none;
}

</style>
