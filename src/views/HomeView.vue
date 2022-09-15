<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="about">
                <h3>Powered by Spotify API</h3>
            </div>
            <div class="profile">
                <div class="profile-pic"></div>
                <span class="profile-name">Forzan</span>
                <i
                    style="color: rgba(111, 216, 233, 1); cursor: pointer"
                    class="fa-solid fa-circle-chevron-down"
                ></i>
            </div>
        </div>

        <div class="home-content">
            <TopArtist />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import TopArtist from "@/components/TopArtist.vue";
import SongsPreview from "@/components/SongsPreview.vue";
export default {
    name: "HomeView",
    components: { TopArtist, SongsPreview },
};
</script>
<style scoped>
.about h3 {
    font-weight: 200;
}
.section {
    height: calc(100% - 280px);
}

@media screen and (max-width: 540px) {
    .section {
        height: calc(100% - 220px);
    }
}
@media screen and (max-width: 450px) {
    .home-main {
        height: 100%;
    }
    .about h3 {
        font-size: 0.8rem;
    }
}
@media screen and (max-width: 328px) {
    .top-artist {
        padding-left: 20px;
    }
}
</style>
