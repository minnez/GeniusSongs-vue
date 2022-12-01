<template>
    <div class="topart">
        <div class="top-artist">
            <div class="title"><h2>Top Songs</h2></div>
            <div v-if="topSongs.length > 0" class="songs">
                <SongCard
                    v-for="song in topSongs.slice(0, 50)"
                    :key="song.chartEntryData"
                    :link="song.trackMetadata.trackUri.slice(14)"
                    :artistName="song.trackMetadata.artists[0].name"
                    :otherArtiste="
                        song.trackMetadata.artists[1] &&
                        song.trackMetadata.artists[1].name
                    "
                    :songTitle="song.trackMetadata.trackName"
                    :albumCover="song.trackMetadata.displayImageUri"
                    :releaseDate="song.trackMetadata.releaseDate"
                    :rank="song.chartEntryData.currentRank"
                />
            </div>
            <div v-else class="topartistloading">
                <div v-if="!notFound"><Loading2 /></div>
                <div v-else><ServerError /></div>
            </div>
        </div>
    </div>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
import Loading2 from "@/components/loading/Loading2.vue";
import ServerError from "@/components/ServerError.vue";
import { computed, onMounted, onUnmounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    components: { SongCard, Loading2, ServerError },
    setup() {
        const store = useStore();
        onMounted(() => {
            if (store.state.topSongs.length) {
                // console.log("store has it");
            } else {
                // console.log("fetching in mounted");
                store.dispatch("getTopSongs");
            }
        });

        const topSongs = computed(() => store.state.topSongs);
        const notFound = computed(() => store.state.notFound);

        return { topSongs, notFound };
    },
};
</script>

<style>
.songs {
    overflow: scroll;
    display: grid;
    grid-auto-flow: column;
    overflow-y: hidden;
    grid-template-rows: auto auto;
    padding-left: 10px;
}
.topartistloading {
    margin: auto;
    top: 50px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.topart {
    height: 100%;
}
.top-artist {
    position: relative;
    padding-top: 20px;
    display: grid;
    grid-template-rows: 30px auto;
    height: 100%;
}
.top-artist .title {
    font-weight: 600;
    padding-left: 20px;
}
@media screen and (max-width: 328px) {
    .title {
        padding-left: 20px;
    }
    .songs {
        padding-left: 10px;
    }
}
</style>
