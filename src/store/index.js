import { createStore } from "vuex";

export default createStore({
    state: {
        topSongs: [],
        searchedTracks: [],
        searchedAlbums: [],
        searchedArtists: [],
    },
    getters: {},
    mutations: {
        SAVE_TOP_SONGS(state, topSongs) {
            console.log(topSongs);
            state.topSongs.push(topSongs);
        },
        SAVE_TRACKS(state, tracksquery) {
            console.log(tracksquery);
            state.searchedTracks.push(tracksquery);
        },
    },
    actions: {
        getTopSongs({ commit }) {
            console.log("in actions");
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": process.env.VUE_APP_X_RAPID_API_KEY,
                    "X-RapidAPI-Host": process.env.VUE_APP_X_RAPID_API_HOST,
                },
            };

            fetch(
                "https://spotify81.p.rapidapi.com/top_200_tracks?country=GLOBAL",
                options
            )
                .then((response) => response.json())
                .then((response) => this.state.topSongs.push(...response))
                .catch((err) => console.error(err));
        },
        saveTracks({ commit }, payload) {
            this.state.searchedTracks = [];
            this.state.searchedTracks.push(...payload);
            console.log(this.state.searchedTracks);
        },
        saveAlbums({ commit }, payload) {
            this.state.searchedAlbums = [];
            this.state.searchedAlbums.push(...payload);
            console.log(this.state.searchedAlbums);
        },
        saveArtists({ commit }, payload) {
            this.state.searchedArtists = [];
            this.state.searchedArtists.push(...payload);
            console.log(this.state.searchedArtists);
        },
    },
    modules: {},
});
