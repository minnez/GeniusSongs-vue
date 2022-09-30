<template>
    <div class="topart">
        <div class="top-artist">
            <div class="title"><h2>Top Songs</h2></div>
            <div v-if="topSongs" class="songs">
                <SongCard
                    v-for="song in topSongs"
                    :key="song.chartEntryData"
                    :artistName="song.trackMetadata.artists[0].name"
                    :songTitle="song.trackMetadata.trackName"
                    albumCover="album1.jpg"
                    :rank="song.chartEntryData.currentRank"
                />
                <!-- <div>{{ topSongs[0].chartEntryData.currentRank }}</div> -->
            </div>
        </div>
    </div>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
import { onMounted, onUnmounted, ref } from "@vue/runtime-core";
export default {
    components: { SongCard },
    setup() {
        onMounted(() => {
            console.log("component is mounted");

            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":
                        "fc1c69b0ddmsh6e762978b038e41p1d2d87jsn4a37bd95d703",
                    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
                },
            };

            fetch(
                "https://spotify81.p.rapidapi.com/top_200_tracks?country=GLOBAL",
                options
            )
                .then((response) => response.json())
                .then((response) => (topSongs.value = response))
                .catch((err) => console.error(err));
        });

        const topSongs = ref();

        return { topSongs };
    },
};
</script>

<style>
.songs {
    overflow: scroll;
    display: flex;
    flex-direction: column;
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
