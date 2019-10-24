<template>
    <div class="flex flex-col h-screen">
        <nav-bar></nav-bar>
        <div class="flex-grow">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	import Nav from "./partials/nav-bar";
	export default {
		name: "App",
		components: {
			'nav-bar': Nav
        }
	}
</script>
