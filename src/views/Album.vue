<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="input">
                <span class="inputIcon"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input
                    placeholder="Search albums"
                    class="inputTerm"
                    type="text"
                />
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

        <div class="album-main">
            <h2>ALBUM</h2>
            <AlbumCard />
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import AlbumCard from "@/components/AlbumCard.vue";
export default {
    components: {
        AlbumCard,
    },
    setup() {},
};
</script>

<style>
.album-main {
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
    flex-wrap: wrap;
}
@media screen and (max-width: 820px) {
    .album-main {
        flex-direction: column;
        flex-wrap: wrap;
        overflow: scroll;
        overflow-y: hidden;
    }
}
</style>
