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

        <div class="artist-main">
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
export default {
    components: { ArtistCard },
    setup() {
        const searchArtist = () => {
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
                    "&type=artists&offset=0&limit=10&numberOfTopResults=5",
                options
            )
                .then((response) => response.json())
                .then((response) => (queryData.value = response.artists.items))
                .catch((err) => console.error(err));
            // console.log(artistSearch.value);
        };
        const artistSearch = ref("");
        const queryData = ref();

        return { artistSearch, searchArtist, queryData };
    },
};
</script>

<style>
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
