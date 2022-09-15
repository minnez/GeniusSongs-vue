import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/lyrics",
        name: "lyrics",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Lyrics.vue"),
    },
    {
        path: "/tracks",
        name: "tracks",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Tracks.vue"),
    },
    {
        path: "/album",
        name: "album",
        component: () => import("../views/Album.vue"),
    },
    {
        path: "/artist",
        name: "artist",
        component: () => import("../views/Artist.vue"),
    },
    {
        path: "/my-songs",
        name: "mysongs",
        component: () => import("../views/Mysongs.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});

export default router;
