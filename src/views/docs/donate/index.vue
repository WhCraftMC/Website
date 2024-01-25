<template>
	<div class="donate">
		<section>
			<h2>捐赠</h2>
      <p>仅接受无条件捐赠</p>
		</section>

		<main>
			<article class="container">
        <div class="br"></div>
        <h1>!!我要恰饭!!</h1>
        <h2>仅接受无条件捐赠</h2>
        <img src="../../../assets/images/docs/donate.png" alt="donateImg"/>
			</article>
        </main>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.donate {
  background: #323232;
  height: 100%;

  section {
    background: rgb(54, 54, 54) url(/images/banners/1.13_technically_updated_java.jpg);
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