import { createStore } from "vuex";

export default createStore({
    state: {
        topSongs: [],
    },
    getters: {},
    mutations: {
        SAVE_TOP_SONGS(state, topSongs) {
            console.log(topSongs);
            state.topSongs.push(topSongs);
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
    },
    modules: {},
});
