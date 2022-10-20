<template>
    <div>
        <router-link
            :to="{
                name: 'trackdetails',
                params: { id: trackId },
            }"
        >
            <div class="song-bar">
                <div style="display: flex">
                    <div
                        class="cover"
                        :style="{
                            'background-image': `url(${albumCover})`,
                        }"
                    ></div>
                    <div class="author-info">
                        <div class="song-title">{{ songTitle }}</div>
                        <div class="artist-name">{{ artistName }}</div>
                    </div>
                </div>

                <div class="song-duration">{{ timeDuration }}</div>
            </div></router-link
        >
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
    props: ["albumCover", "songTitle", "artistName", "duration", "trackId"],
    setup(props) {
        const timeDuration = computed(() => {
            let minutes = Math.floor(props.duration / 60000);
            let seconds = ((props.duration % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        });

        return { timeDuration };
    },
};
</script>

<style>
.author-info {
    display: flex;
    flex-direction: column;
}
.song-bar {
    width: fit-content;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    padding-right: 12px;
    border-radius: 12px;
    width: 400px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.12);
    margin: 6px;
}
.song-bar .cover {
    width: 40px;
    height: 40px;
    background-size: cover;
    margin-right: 8px;
    border-radius: 8px;
    box-shadow: 0.4px 0.4px 8px rgba(0, 0, 0, 0.14);
}
.song-bar .song-title {
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    /* .song-title {
        max-width: 180px;
    } */
    .author-info {
        max-width: 170px;
    }
    /* .song-bar .artist-name {
        display: none;
    } */
}
@media screen and (max-width: 450px) {
    .song-bar {
        width: 280px;
    }
}
</style>
