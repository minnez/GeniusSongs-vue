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
            <div class="name">{{ name }}</div>
            <div class="owner">{{ owner }}</div>
            <div class="year-of-release">{{ year }}</div>
            <div class="album-tracks">
                <div class="hed">Tracks</div>
                <div class="singles">
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SongBar from "@/components/SongBar.vue";
import Loading2 from "@/components/loading/Loading2.vue";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
    components: {
        SongBar,
        Loading2,
    },
    setup() {
        const route = useRoute();
        const albumCover = ref();
        const name = ref();
        const owner = ref();
        const year = ref();
        const genres = ref();

        const { id } = route.params;
        console.log(id);

        onMounted(() => {
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
                    "X-RapidAPI-Host": process.env.VUE_APP_X_RAPID_API_HOST,
                },
            };

            fetch("https://spotify81.p.rapidapi.com/albums?ids=" + id, options)
                .then((response) => response.json())
                .then((response) => {
                    albumCover.value = response.albums[0].images[0].url;
                    name.value = response.albums[0].name;
                    year.value = response.albums[0].release_date;
                    owner.value = response.albums[0].artists[0].name;

                    console.log(response.albums);
                })
                .catch((err) => console.error(err));
        });

        return { albumCover, name, year, owner };
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
}

.album-details-cover {
    height: 250px;
    width: 250px;
    border-radius: 20px;
    background-size: cover;
    margin: auto;
}
.details .name {
    font-weight: 600;
    font-size: 1.2rem;
    width: fit-content;
    margin: auto;
}
.details .owner {
    font-weight: 400;
    font-size: 1.1rem;
    width: fit-content;
    margin: auto;
}
.details .year-of-release {
    font-weight: 200;
    font-size: 1.1rem;
    width: fit-content;
    margin: auto;
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
.singles {
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width: 540px) {
    .album-details-cover {
        height: 150px;
        width: 150px;
        background-size: contain;
    }
    .details .name {
        font-weight: 600;
        font-size: 1rem;
    }
    .details .owner {
        font-weight: 400;
        font-size: 1rem;
    }
    .details .year-of-release {
        font-weight: 200;
        font-size: 1rem;
    }
    .details {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .details::-webkit-scrollbar {
        display: none;
    }
}
</style>
