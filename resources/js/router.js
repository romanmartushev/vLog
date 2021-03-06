import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/pages/home";
import Videos from "./components/pages/vidoes";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            name:'home',
            path: '/',
            component: Home
        },
        {
            name: 'videos',
            path: '/videos',
            component: Videos
        },
    ]
})
