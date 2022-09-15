<template>
    <div class="details-main">
        <div class="back">
            <i style="padding: 7px" class="fa-solid fa-arrow-left"></i>Back
        </div>
        <div class="details">
            <div
                :style="{
                    'background-image': `url(https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699)`,
                }"
                class="album-details-cover"
            ></div>
            <div class="name">DAMN.</div>
            <div class="owner">Kendrick Lamar</div>
            <div class="year-of-release">2017-06-11</div>
            <div class="album-tracks">
                <div class="hed">Tracks</div>
                <div class="singles">
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                    <SongBar
                        albumCover="album1.jpg"
                        songTitle="Final Countdown"
                        artistName="Paa Bobo"
                        duration="3:16"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SongBar from "@/components/SongBar.vue";
export default {
    components: {
        SongBar,
    },
    data() {
        return {
            id: this.$route.params.id,
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
.details .owner {
    font-weight: 400;
    font-size: 1.1rem;
    width: fit-content;
    margin: auto;
}
.details .year-of-release {
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
.singles {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .details .owner {
        font-weight: 400;
        font-size: 1rem;
    }
    .details .year-of-release {
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
