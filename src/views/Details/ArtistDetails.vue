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
        <div
            v-if="!profilePic"
            style="
                height: calc(100% - 30px);
                display: flex;
                justify-content: center;
                align-items: center;
            "
        >
            <Loading2 />
        </div>
        <div v-else class="details">
            <div
                :style="{
                    'background-image': `url(${profilePic})`,
                }"
                class="album-details-cover"
            ></div>
            <div class="t-details">
                <div class="name">
                    <span>{{ name }}</span>
                </div>
                <div class="type mb-15">
                    <span>{{ type }}</span>
                </div>
                <div class="owner mb-15">
                    Followers on spotify: <span> {{ followers }}</span>
                </div>
                <!-- <div class="duration">4:56</div> -->
                <div style="margin-bottom: 8px">Genre</div>
                <div class="genres">
                    <span class="type" v-for="genre in genres" :key="genre">{{
                        genre
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading2 from "@/components/loading/Loading2.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
    components: { Loading2 },
    setup() {
        const route = useRoute();
        const profilePic = ref();
        const name = ref();
        const type = ref();
        const followers = ref();
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

            fetch("https://spotify81.p.rapidapi.com/artists?ids=" + id, options)
                .then((response) => response.json())
                .then((response) => {
                    profilePic.value = response.artists[0].images[0].url;
                    name.value = response.artists[0].name;
                    type.value = response.artists[0].type;
                    followers.value = response.artists[0].followers.total;
                    genres.value = response.artists[0].genres;
                })
                .catch((err) => console.error(err));
        });

        return { profilePic, name, type, followers, genres };
    },
};
</script>

<style>
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
    font-size: 1.5rem;
}
.details .followers {
    font-weight: 400;
    font-size: 1.1rem;
    width: fit-content;
}
.duration {
    width: fit-content;
}
.details .genres {
    font-weight: 200;
    font-size: 1.1rem;
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
}
.type {
    background-color: rgba(71, 71, 253, 0.1);
    color: #555;
    padding: 3px 10px;
    border-radius: 6px;
    margin: 4px 4px;
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
