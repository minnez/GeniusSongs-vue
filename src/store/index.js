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
                .then((response) => commit("SAVE_TOP_SONGS", response))
                .catch((err) => console.error(err));
        },
    },
    modules: {},
});
