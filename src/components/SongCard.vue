<template>
    <div>
        <router-link to="/track-details/246">
            <div class="song-card">
                <div
                    class="song-cover"
                    :style="{
                        'background-image': `url(${require(`@/assets/${albumCover}`)})`,
                    }"
                ></div>
                <div class="song-name">{{ songTitle }}</div>
                <div class="song-artist">{{ artistName }}</div>
                <div v-if="rank" class="song-artist">
                    Rank: <span style="font-weight: 700">{{ rank }}</span>
                </div>
            </div></router-link
        >
    </div>
</template>

<script>
export default {
    props: ["albumCover", "songTitle", "artistName", "rank"],
    setup() {},
};
</script>

<style>
.song-card {
    width: fit-content;
}
.song-card .song-cover {
    width: 150px;
    height: 150px;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.324);
    margin: 10px 10px;
}
.song-card .song-name {
    max-width: 200px;
    overflow: hidden;
    font-weight: 600;
    padding: 0 5px;
}
.song-card .song-artist {
    font-weight: 200;
    padding: 0 5px;
}
@media screen and (max-width: 540px) {
    .song-card .song-cover {
        width: 100px;
        height: 100px;
    }
    .song-card .song-name {
        max-width: 150px;
    }
}
</style>
