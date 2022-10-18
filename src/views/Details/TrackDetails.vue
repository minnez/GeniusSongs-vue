<template>
    <div class="details-main">
        <div class="back">
            <span
                class="cursor: pointer"
                style="padding: 10px 5px"
                @click="$router.go(-1)"
            >
                <i style="padding: 7px" class="fa-solid fa-arrow-left"></i
                >Back</span
            >
        </div>
        <div class="load" v-if="!albumCover">
            <Loading2 />
        </div>
        <div v-else class="details">
            <div
                :style="{
                    'background-image': `url(${albumCover})`,
                }"
                class="album-details-cover"
            ></div>
            <div class="t-details">
                <div class="name mb-15">
                    Song Title: <span>{{ songTitle }}</span>
                </div>
                <div class="duration mb-15">
                    Song duration:
                    <span v-if="songDurationReadable">{{
                        songDurationReadable
                    }}</span>
                    <span v-else>--:--</span>
                </div>
                <div class="duration mb-15">
                    Album :
                    <span v-if="albumType == 'single'">{{ albumType }}</span>
                    <span v-else>
                        <router-link
                            :to="{
                                name: 'albumdetails',
                                params: { id: albumLink },
                            }"
                        >
                            {{ albumName }}
                        </router-link>
                    </span>
                </div>
                <div class="owner mb-15">
                    Artist Name:
                    <span
                        ><router-link
                            :to="{
                                name: 'artistdetails',
                                params: { id: artistId },
                            }"
                            >{{ artistName }}</router-link
                        ></span
                    >
                </div>
                <!-- <div class="genre">{{ rank }}</div> -->
                <div class="mb-15">
                    Other Artistes:
                    <span v-if="otherArtiste"
                        ><router-link
                            v-if="otherArtiste"
                            :to="{
                                name: 'artistdetails',
                                params: { id: otherArtisteId },
                            }"
                            >{{ otherArtiste }}</router-link
                        ></span
                    >
                    <span v-else>None</span>
                </div>
                <div class="mb-15">
                    Released on: <span>{{ releaseDate }}</span>
                </div>
                <!-- <div class="mb-15">
                    Top songs Ranking: <span>{{ rank }}</span>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import Loading2 from "@/components/loading/Loading2.vue";
export default {
    components: { Loading2 },
    setup() {
        const route = useRoute();

        const albumCover = ref();
        const songTitle = ref();
        const artistName = ref();
        const releaseDate = ref();
        const otherArtiste = ref();
        const songDuration = ref();
        const artistId = ref();
        const otherArtisteId = ref();
        const albumType = ref();
        const albumName = ref();
        const albumLink = ref();

        const { id } = route.params;
        onMounted(() => {
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
                    "X-RapidAPI-Host": process.env.VUE_APP_X_RAPID_API_HOST2,
                },
            };

            fetch("https://spotify23.p.rapidapi.com/tracks/?ids=" + id, options)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response.tracks[0]);
                    songDuration.value = response.tracks[0].duration_ms;
                    songTitle.value = response.tracks[0].name;
                    albumCover.value = response.tracks[0].album.images[1].url;
                    artistName.value = response.tracks[0].album.artists[0].name;
                    artistId.value = response.tracks[0].album.artists[0].id;
                    releaseDate.value = response.tracks[0].album.release_date;
                    albumType.value = response.tracks[0].album.album_type;
                    albumName.value = response.tracks[0].album.name;
                    albumLink.value = response.tracks[0].album.id;
                    otherArtiste.value =
                        response.tracks[0].album.artists[1] &&
                        response.tracks[0].album.artists[1].name;
                    otherArtisteId.value =
                        response.tracks[0].album.artists[1] &&
                        response.tracks[0].album.artists[1].id;
                    // songDuration.value = response.tracks[0].duration_ms;
                })
                .catch((err) => console.error(err));
        });

        const songDurationReadable = computed(() => {
            let minutes = Math.floor(songDuration.value / 60000);
            let seconds = ((songDuration.value % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        });

        return {
            albumCover,
            songTitle,
            artistName,
            otherArtiste,
            releaseDate,
            songDurationReadable,
            artistId,
            otherArtisteId,
            albumType,
            albumName,
            albumLink,
        };
    },
};
</script>

<style>
.load {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mb-15 {
    margin-bottom: 15px;
    font-weight: 200;
}
.mb-15 > span {
    font-weight: 600;
}
.details-main {
    height: 100%;
    display: grid;
    grid-template-rows: 50px calc(100% - 20px);
    grid-template-columns: 100%;
}
.details {
    height: calc(100% - 30px);
    padding: 20px;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.t-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.album-details-cover {
    height: 250px;
    width: 250px;
    border-radius: 20px;
    background-size: cover;
}
.details .name {
    width: fit-content;
}
.details .name > span {
    font-size: 1.2rem;
}
.details .followers {
    font-weight: 400;
    font-size: 1.1rem;
    width: fit-content;
}
.duration {
    width: fit-content;
}
.details .genre {
    font-weight: 200;
    font-size: 1.1rem;
    width: fit-content;
}
.hed {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    width: 100%;
}
.back {
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
@media screen and (max-width: 700px) {
    .details {
        flex-direction: column;
    }
}
@media screen and (max-width: 540px) {
    .album-details-cover {
        height: 150px;
        width: 150px;
        background-size: contain;
    }
    .details .name {
        font-size: 1rem;
    }
    .details .followers {
        font-weight: 400;
        font-size: 1rem;
    }
    .details .genre {
        font-weight: 200;
        font-size: 1rem;
    }
    .details {
        flex-direction: column;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .details::-webkit-scrollbar {
        display: none;
    }
}
</style>
