<template>
    <div class="donate-box">
        <div class="br"></div>
        <h1>!!我要恰饭!!</h1>
        <h2>仅接受无条件捐赠</h2>
        <img src="../../../assets/images/docs/donate.png" alt="donateImg"/>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.br {
    height: 5em;
}
.donate-box {
    height: 90vh;
    widows: 100vw;
    display: flex;
    color: var(--main-text-color);
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 0px;
    }

    h2 {
        margin-bottom: 1rem;
    }

    img {
        object-fit: cover;
    }
}
</style>