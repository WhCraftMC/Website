<template>
    <div class="login-main">
        <h1>登录 WhCraft</h1>
        <br>
        <mdui-text-field v-model="username" name="username" validationMessage="仅可以" label="游戏ID" pattern="[a-zA-Z0-9_]*" variant="outlined" required="true" type="text" autocomplete="true"></mdui-text-field>
        <br>
        <mdui-text-field v-model="password" name="password" label="密码" pattern="[a-zA-Z0-9!-~_]*" variant="outlined" required="true" type="password" toggle-password minlength="6" maxlength="20" autocomplete="true"></mdui-text-field>
        <div class="rule_box">
            <mdui-checkbox id="rule" required="true">我已阅读并同意目前好像还不存在的《霸王条款》</mdui-checkbox>
        </div>
        <div class="links_toolbar">
            <RouterLink to="" class="links">忘记密码?</RouterLink>
            <div class="spacer"></div>
            <RouterLink to="" class="links">注册新账号</RouterLink>
        </div>
        <br>
        <div class="login_button_box">
            <mdui-button id="login" type="submit" style="width: 100%;">登录</mdui-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { snackbar } from "mdui/functions/snackbar.js";
import 'mdui/components/text-field.js';
import axios from "axios"
import { ref } from "vue";

const username = ref('');
const password = ref('');

async function login() {
    try {
        const respone = await axios.post("http://localhost:3000/auth/login");
        localStorage.setItem("token", respone.data.data.token);
        snackbar({
            message: `<i class="mdui-icon material-icons">&#xe86c;</i> 登录成功!`,
            placement: 'top',
            closeable: true,
            autoCloseDelay: 1500
        });
    } catch (err) {}
}
</script>

<style scoped lang="scss">
.login-main {
    display: flex;
    flex-direction: column;
    align-items: center;

    .rule_box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        width: 100%;
    }

    .links_toolbar {
        display: flex;
        width: 100%;
        text-wrap: nowrap;
        
        .spacer {
            width: 100%;
        }

        .links {
            text-decoration: none;

            &:hover {
                color: rgb(200, 110, 255);
            }
        }
    }

    .login_button_box {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}
</style>