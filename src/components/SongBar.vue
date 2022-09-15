<template>
    <div>
        <router-link to="/track-details/246">
            <div class="song-bar">
                <div
                    class="cover"
                    :style="{
                        'background-image': `url(${require(`@/assets/${albumCover}`)})`,
                    }"
                ></div>
                <div class="song-title">{{ songTitle }}</div>
                <div class="artist-name">{{ artistName }}</div>
                <div class="song-duration">{{ duration }}</div>
            </div></router-link
        >
    </div>
</template>

<script>
export default {
    props: ["albumCover", "songTitle", "artistName", "duration"],
    setup() {},
};
</script>

<style>
.song-bar {
    width: fit-content;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 8px;
    border-radius: 12px;
    width: 400px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.12);
    margin: 6px;
}
.song-bar .cover {
    width: 40px;
    height: 40px;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0.4px 0.4px 8px rgba(0, 0, 0, 0.14);
}
.song-bar .song-title {
    font-weight: 600;
}
.song-bar .artist-name {
    font-weight: 400;
}
.song-bar .song-duration {
    font-weight: 200;
}
@media screen and (max-width: 490px) {
    .song-bar {
        width: 300px;
    }
    .song-bar .artist-name {
        display: none;
    }
}
@media screen and (max-width: 450px) {
    .song-bar {
        width: 250px;
    }
}
</style>
