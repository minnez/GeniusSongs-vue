<template>
    <div class="details-main">
        <div class="back">
            <i style="padding: 7px" class="fa-solid fa-arrow-left"></i>Back
        </div>
        <div class="details">
            <div
                :style="{
                    'background-image': `url(${albumCover})`,
                }"
                class="album-details-cover"
            ></div>
            <div class="name">{{ songTitle }}</div>
            <div class="owner">{{ artistName }}</div>
            <div class="duration">4:56</div>
            <div class="genre">{{ rank }}</div>
            <div>{{ otherArtiste }}</div>
            <div>{{ releaseDate }}</div>
        </div>
    </div>
</template>

<script>
import SongBar from "@/components/SongBar.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
    components: {},
    data() {
        return {
            id: this.$route.params.id,
        };
    },
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
.details .followers {
    font-weight: 400;
    font-size: 1.1rem;
    width: fit-content;
    margin: auto;
}
.duration {
    width: fit-content;
    margin: auto;
}
.details .genre {
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
    .details .followers {
        font-weight: 400;
        font-size: 1rem;
    }
    .details .genre {
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
