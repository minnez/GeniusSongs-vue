import { createStore } from "vuex";

export default createStore({
    state: {
        notFound: false,
        topSongs: [],
        searchedTracks: [],
        searchedAlbums: [],
        searchedArtists: [],
    },
    getters: {},
    mutations: {
        SAVE_TOP_SONGS(state, topSongs) {
            // console.log(topSongs);
            state.topSongs.push(topSongs);
        },
        SAVE_TRACKS(state, tracksquery) {
            // console.log(tracksquery);
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
                .then((response) => {
                    if (response.status_code === 404) {
                        this.state.notFound = true;
                    } else {
                        this.state.topSongs.push(...response);
                    }
                })
                .catch((err) => {
                    console.log("we got an error");
                });
        },
        saveTracks({ commit }, payload) {
            this.state.searchedTracks = [];
            this.state.searchedTracks.push(...payload);
        },
        saveAlbums({ commit }, payload) {
            this.state.searchedAlbums = [];
            this.state.searchedAlbums.push(...payload);
        },
        saveArtists({ commit }, payload) {
            this.state.searchedArtists = [];
            this.state.searchedArtists.push(...payload);
            console.log(this.state.searchedArtists);
        },
    },
    modules: {},
});
