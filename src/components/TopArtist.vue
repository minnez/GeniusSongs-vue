<template>
    <div class="topart">
        <div class="top-artist">
            <div class="title"><h2>Top Songs</h2></div>
            <div v-if="topSongs.length > 0" class="songs">
                <SongCard
                    v-for="song in topSongs"
                    :key="song.chartEntryData"
                    :artistName="song.trackMetadata.artists[0].name"
                    :songTitle="song.trackMetadata.trackName"
                    :albumCover="song.trackMetadata.displayImageUri"
                    :rank="song.chartEntryData.currentRank"
                />
            </div>
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: hidden;
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
