<template>
    <div class="flex flex-col h-full w-full justify-center">
        <video class="flex-grow bg-gray-800" controls>
            <source v-if="current" :src="'/uploads/'+ current" type="video/mp4">
        </video>
        <div class="w-full bg-gray-800">
            <carousel :per-page="3">
                <slide v-for="(video, index) in videos" class="text-center my-2" :key="index">
                    <video @click.prevent="current = video" class="w-full">
                        <source :src="'/uploads/'+ video" type="video/mp4">
                    </video>
                    <button @click="current = video" class="text-white bg-gray-900 w-full">{{video}}</button>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
	import { Carousel, Slide } from 'vue-carousel';
	export default {
		name: "Videos",
		components: {
			Carousel,
			Slide
		},
        data() {
			return {
				videos: [],
                current: null
            }
        },
        methods: {
			get() {
				const vm = this;
				axios.get('/api/videos/get')
                    .then((response) => {
                    	vm.videos = response.data;
                    })
            }
        },
        mounted() {
			this.get();
		}
	}
</script>
