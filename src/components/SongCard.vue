<template>
    <main>
        <div class="song-card">
            <div
                class="song-cover"
                :style="{
                    'background-image': `url(${require(`@/assets/${albumCover}`)})`,
                }"
            ></div>
            <div class="song-name">{{ songTitle }}</div>
            <div class="song-artist">{{ artistName }}</div>
        </div>
    </main>
</template>

<script>
export default {
    props: ["albumCover", "songTitle", "artistName"],
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
}
</style>
