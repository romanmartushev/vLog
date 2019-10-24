<template>
    <div class="h-full">
        <banner>
            <h1 class="text-6xl text-gray-100">vLog</h1>
            <p class="text-gray-500 text-2xl mb-6 text-center px-12">
                <span class="text-gray-300 text-3xl uppercase">Once</span> a day you can rant for <span class="text-gray-300 text-3xl uppercase">5</span> whole minutes.
                About <span class="text-gray-300 text-3xl uppercase">whatever</span> you want.
                Use it <span class="text-gray-300 text-3xl uppercase">wisely</span>!
            </p>
            <router-link class="text-white bg-gray-900 uppercase rounded py-2 px-3" :to="{ name: 'videos' }">Get Started</router-link>
        </banner>
    </div>
</template>

<script>
	import Banner from "../partials/banner";
	export default {
		name: "Home",
		components: {
			Banner
		}
	}
</script>
