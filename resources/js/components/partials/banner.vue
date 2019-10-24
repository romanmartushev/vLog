<template>
    <section id="banner" class="w-full h-full bg-gray-800">
        <div class="bg-fade-black-5 w-full h-full flex flex-col justify-center content-center items-center">
            <slot></slot>
        </div>
    </section>
</template>

<script>
	export default {
		name: "banner"
	}
</script>
