<template>
    <div class="details-main">
        <div class="back">
            <span style="padding: 10px 5px" @click="$router.go(-1)">
                <i style="padding: 7px" class="fa-solid fa-arrow-left"></i
                >Back</span
            >
        </div>
        <div class="details">
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
                <div class="owner mb-15">
                    Artist Name: <span>{{ artistName }}</span>
                </div>
                <!-- <div class="duration">4:56</div> -->
                <!-- <div class="genre">{{ rank }}</div> -->
                <div class="mb-15">
                    Other Artistes:
                    <span v-if="otherArtiste">{{ otherArtiste }}</span>
                    <span v-else>None</span>
                </div>
                <div class="mb-15">
                    Released on: <span>{{ releaseDate }}</span>
                </div>
                <div class="mb-15">
                    Top songs Ranking: <span>{{ rank }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
    components: {},
    setup() {
        const route = useRoute();

        const {
            albumCover,
            songTitle,
            artistName,
            rank,
            releaseDate,
            otherArtiste,
        } = route.query;

        return {
            albumCover,
            songTitle,
            artistName,
            rank,
            otherArtiste,
            releaseDate,
        };
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
