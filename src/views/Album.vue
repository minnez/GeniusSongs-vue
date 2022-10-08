<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="input">
                <span class="inputIcon"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input
                    @keypress.enter="searchAlbum"
                    v-model="albumSearch"
                    placeholder="Search Albums"
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
            <h2 v-if="!queryData">Search for Albums to view here</h2>
            <Loading2 v-else />
        </div>

        <div v-else class="artist-main">
            <AlbumCard
                v-for="(album, index) in queryData"
                :link="album.data.uri.slice(14)"
                :name="album.data.name"
                :cover="album.data.coverArt.sources[0].url"
                :owner="album.data.artists.items[0].profile.name"
                :year="album.data.date.year"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import AlbumCard from "../components/AlbumCard.vue";
import Loading2 from "../components/loading/Loading2.vue";
export default {
    components: { AlbumCard, Loading2 },
    setup() {
        const searchAlbum = () => {
            queryData.value = true;
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
                    albumSearch.value +
                    "&type=albums&offset=0&limit=10&numberOfTopResults=5",
                options
            )
                .then((response) => response.json())
                // .then((response) => console.log(response.albums.items))
                .then((response) => (queryData.value = response.albums.items))
                .then(() => (loading.value = false))
                .catch((err) => console.error(err));
            // console.log(artistSearch.value);
        };
        const albumSearch = ref("");
        const queryData = ref();
        const loading = ref(true);

        return { albumSearch, searchAlbum, queryData, loading };
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
