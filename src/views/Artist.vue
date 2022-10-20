<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="input">
                <span class="inputIcon"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input
                    @keypress.enter="searchArtist"
                    v-model="artistSearch"
                    placeholder="Search Artists"
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
        <div v-if="loading" class="beforeSearchArtist">
            <h2 v-if="!queryData.length">Search for Artists to view here</h2>
            <Loading2 v-else />
        </div>

        <div v-else class="artist-main">
            <ArtistCard
                v-for="(artist, index) in queryData"
                :key="index"
                :name="artist.data.profile.name"
                :artistId="artist.data.uri.slice(15)"
                :picture="
                    artist.data.visuals.avatarImage &&
                    artist.data.visuals.avatarImage.sources[0].url
                "
            />
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ArtistCard from "../components/ArtistCard.vue";
import Loading2 from "../components/loading/Loading2.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
export default {
    components: { ArtistCard, Loading2 },
    setup() {
        const store = useStore();

        const artistSearch = ref("");
        const loading = ref(true);

        onMounted(() => {
            if (store.state.searchedArtists.length) {
                loading.value = false;
            }
        });

        const searchArtist = () => {
            loading.value = true;
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
                    "X-RapidAPI-Host": process.env.VUE_APP_X_RAPID_API_HOST,
                },
            };
            fetch(
                "https://spotify81.p.rapidapi.com/search?q=" +
                    artistSearch.value +
                    "&type=artists&offset=0&limit=15&numberOfTopResults=5",
                options
            )
                .then((response) => response.json())
                .then((response) =>
                    store.dispatch("saveArtists", response.artists.items)
                )
                .then(() => (loading.value = false))
                .catch((err) => console.error(err));
            // console.log(artistSearch.value);
        };
        const queryData = computed(() => store.state.searchedArtists);

        return { artistSearch, searchArtist, queryData, loading };
    },
};
</script>

<style>
.beforeSearchArtist {
    height: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(111, 216, 233, 0.8);
    text-align: center;
}
.artist-main {
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow: scroll;
    overflow-x: hidden;
    flex-wrap: wrap;
}
@media screen and (max-width: 820px) {
    .artist-main {
        flex-direction: column;
        flex-wrap: wrap;
        overflow: scroll;
        overflow-y: hidden;
    }
}
</style>
