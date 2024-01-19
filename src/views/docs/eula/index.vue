<template>
	<div class="eula">
		<section class="eula-section" style="background-image: url(&quot;/images/banners/other_early_console_era.jpg&quot;);">
			<h2>玩家守则</h2>
            <p>服务器的玩家守则</p>
		</section>

		<main>
			<article class="container">
                <h1>概述</h1>
                <p>本 EULA 是您和我们（WhCraftMC）之间达成的协议，您应该阅读完整内容。您与Mojang AB 和微软公司或（如适用）之间达成的法律协议（<a href="https://www.minecraft.net/zh-hans/eula" target="_blank">Eula</a>）在此仍然生效。</p>

                <h1>玩家守则</h1>
                <p>这是我们的社区准则。</p>
                    <h2>您可以和不可以用 MINECRAFT 软件和内容在我们服务器做的事情</h2>
                    <p>您可以畅玩我们的游戏。</p>
                    <p>但是，除非我们明确同意，否则您不得进行以下的任意行为：</p>
                    <li>将我们创建的任何内容用于商业用途；</li>
                    <li>试图通过我们创建的任何内容赚钱；</li>
                    <li>允许其他人以不公平或不合理的方式访问我们创建的任何内容；</li>
                    <li>利用我们创建的内容传播非法、不符合道德伦理的内容；</li>
                    <li>利用我们创建的内容的漏洞。</li>

                    <h2>网络安全</h2>
                    <p>如果您在我们的游戏中与人们交谈，请当心。无论是您还是我们都很难确定人们说的哪些话是真的，甚至很难确定人们实际上是否与其所声称的身份相符。在披露有关您自己的信息之前，始终应该三思。</p>

                    <h2>我们的价值观</h2>
                    <p>包容的精神存在于我们的价值观，它是维持充满活力和热情的社区的关键。</p>
                    <li>Minecraft 适合每个人</li>
                    <li>与他人一起玩游戏应该是安全和包容的</li>
                    <li>这里没有仇恨的容身之地</li>

                <h1>一般条款</h1>
                <p>您当地的法律可能会赋予您本 EULA 无法更改的权利；如果是这样情况，本 EULA 将在法律允许的范围内适用。</p>
                <p>如果有适当理由，我们可能会不时更改本 EULA，例如更改我们的游戏、惯例或法律义务。但这些更改只在法律允许的范围内生效。在后一种情况下，我们会在更改生效前通知您，方法是在我们的网站上张贴通知，或者通过其他合理的方式。虽然在这方面我们会尽量做到公平，但有时法律会有变化，或者有人会做一些影响游戏的其他用户的事情，因此我们需要禁止这种行为。</p>
                <p>如果您向我们提出有关 Minecraft 的建议，则该建议是免费的，我们没有义务接受或考虑。这意味着我们可以通过所需的任何方式使用或不使用您的建议，且不必向您支付报酬。如果您认为我们应为您的建议支付报酬，那么除非您提前告诉我们您希望得到报酬并且我们已经以书面形式回复，要求您提交该建议，否则请不要将您的建议告诉我们。</p>

            </article>
		</main>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.eula {
  background: #323232;
  height: 100%;

  .eula-section {
    background: rgb(54, 54, 54) url(../../assets/images/banners/other_early_console_era.jpg);
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