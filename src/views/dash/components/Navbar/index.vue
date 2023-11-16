<template>
  	<header class="appbar mdui-appbar mdui-appbar-fixed navbar">
		<div class="mdui-toolbar">
			<RouterLink to="/" class="mdui-typo-headline mdui-hidden-xs">WhCraft 用户中心</RouterLink>
			<RouterLink to="/" class="mdui-typo-title">首页</RouterLink>

			<div class="mdui-toolbar-spacer"></div>
				
    		<RouterLink to="https://skin.fxcraft.cn/auth/login" class="mdui-btn mdui-ripple capitalize">
				<i class="mdui-icon material-icons"></i>
				登录
			</RouterLink>

        	<button v-if="false" href="javascript:;" class="mdui-btn mdui-ripple" mdui-menu="{target: '#user-menu-1'}">
	        	<img src="https://skin.fxcraft.cn/avatar/0?size=36" class="bs-avatar mr-2" alt="User Image">
        		<span data-mark="nickname" style="text-transform:capitalize">
		        	bilirumble
	        	</span>
        	</button>
	  	</div>
  	</header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.navbar {
	background-color: rgb(33, 33, 33);
}
</style>