<template>
    <form @submit="login" id="login_from">
        <div class="login-main">
            <h1>登录 WhCraft</h1>
            <br>
            <mdui-text-field @input="updateUsername" id="username" name="username" validationMessage="仅可以" label="游戏ID" pattern="[a-zA-Z0-9_]*" variant="outlined" required="true" type="text" autocomplete="true"></mdui-text-field>
            <br>
            <mdui-text-field @input="updatePassword" id="password" name="password" label="密码" pattern="[a-zA-Z0-9!-~_]*" variant="outlined" required="true" type="password" toggle-password minlength="6" maxlength="20" autocomplete="true"></mdui-text-field>
            <div class="rule_box">
                <mdui-checkbox @click="updateRule" id="rule" required="true" validationMessage="你不同意也得同意!">我已阅读并同意目前好像还不存在的《霸王条款》</mdui-checkbox>
            </div>
            <div class="links_toolbar">
                <RouterLink to="" class="links">忘记密码?</RouterLink>
                <div class="spacer"></div>
                <RouterLink to="" class="links">注册新账号</RouterLink>
            </div>
            <br>
            <div class="login_button_box">
                <mdui-button type="submit" style="width: 100%;">登录</mdui-button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { snackbar } from "mdui/functions/snackbar.js";
import 'mdui/components/text-field.js';
import axios from "axios"
import { ref } from "vue";

const username = ref();
const password = ref();
const rule = ref(false);

const updateUsername = (event: any) => {
  username.value = event.target.value;
};
const updatePassword = (event: any) => {
  password.value = event.target.value;
};
const updateRule = (event: any) => {
  rule.value = !(rule.value);
};
const userPattern = /\b^[a-zA-Z0-9_]*\b/
const passwordPattern = /\b^[a-zA-Z0-9!-~_]*\b/

async function login(event: any) {
    event.preventDefault();
    try {
        if (!username.value || !password.value || !rule.value) {
            snackbar({
                message: `<i class="mdui-icon material-icons">&#xe000;</i> 请将表单填写完整!`,
                placement: 'top',
                closeable: true,
                autoCloseDelay: 1500
            });
            return;
        }

        if (!userPattern.test(username.value) || !passwordPattern.test(password.value)) {
            snackbar({
                message: `<i class="mdui-icon material-icons">&#xe000;</i> 用户名或密码不符合要求!`,
                placement: 'top',
                closeable: true,
                autoCloseDelay: 1500
            });
        }

        const respone = await axios.post("http://localhost:3000/auth/login", {
            "username": `${username.value}`,
            "password": `${password.value}`
        });

        localStorage.setItem("Token", respone.data.data.token);

        snackbar({
            message: `<i class="mdui-icon material-icons">&#xe86c;</i> 登录成功!`,
            placement: 'top',
            closeable: true,
            autoCloseDelay: 1500
        });
    } catch (err) {
        snackbar({
            message: `<i class="mdui-icon material-icons">&#xe000;</i> 出错了QWQ: ${err}!`,
            placement: 'top',
            closeable: true,
            autoCloseDelay: 1500
        });
        console.error(`错误: ${err}`)
    }
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