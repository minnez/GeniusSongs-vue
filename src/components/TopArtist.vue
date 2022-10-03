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
            <!-- <div>{{ topSongs }}</div> -->
        </div>
    </div>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
import { computed, onMounted, onUnmounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    components: { SongCard },
    setup() {
        const store = useStore();
        onMounted(() => {
            console.log("component mounted");
            store.dispatch("getTopSongs");
        });

        const topSongs = computed(() => store.state.topSongs);

        return { topSongs };
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
}
.topart {
    height: 100%;
}
.top-artist {
    padding-top: 20px;
    display: grid;
    grid-template-rows: 30px auto;
    height: 100%;
}
.top-artist .title {
    font-weight: 600;
}
@media screen and (max-width: 328px) {
    .title {
        padding-left: 20px;
    }
    .songs {
        padding-left: 20px;
    }
}
</style>
