<template>
    <div class="after">
        <div class="searched">
            <Preview />
        </div>
        <div class="fetchwrap">
            <h3 style="padding: 6px">Songs</h3>
            <div class="fetchedsongs">
                <SongBar
                    albumCover="album2.jpg"
                    songTitle="Funky Friday"
                    artistName="Ohemaa Mercy"
                    duration="3:26"
                />
                <SongBar
                    albumCover="album4.jpg"
                    songTitle="Runaway"
                    artistName="21 Savage"
                    duration="4:46"
                />
                <SongBar
                    albumCover="album2.jpg"
                    songTitle="Funky Friday"
                    artistName="Ohemaa Mercy"
                    duration="3:26"
                />
                <SongBar
                    albumCover="album4.jpg"
                    songTitle="Runaway"
                    artistName="21 Savage"
                    duration="4:46"
                />
                <SongBar
                    albumCover="album2.jpg"
                    songTitle="Funky Friday"
                    artistName="Ohemaa Mercy"
                    duration="3:26"
                />
                <SongBar
                    albumCover="album4.jpg"
                    songTitle="Runaway"
                    artistName="21 Savage"
                    duration="4:46"
                />
                <SongBar
                    albumCover="album2.jpg"
                    songTitle="Funky Friday"
                    artistName="Ohemaa Mercy"
                    duration="3:26"
                />
                <SongBar
                    albumCover="album4.jpg"
                    songTitle="Runaway"
                    artistName="21 Savage"
                    duration="4:46"
                />
            </div>
        </div>
    </div>
</template>

<script>
import SongBar from "@/components/SongBar.vue";
import Preview from "@/components/Preview.vue";
export default {
    components: { Preview, SongBar },
};
</script>

<style>
.after {
    display: grid;
    height: 100%;
    grid-template-columns: auto 500px;
    grid-template-rows: 100%;
}
.fetchwrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
}
.fetchedsongs {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    overflow: scroll;
    height: 100%;
    overflow-x: hidden;
}
@media screen and (max-width: 900px) {
    .after {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .searched {
        display: none;
    }
}
@media screen and (max-width: 450px) {
    .fetchedsongs {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .fetchedsongs::-webkit-scrollbar {
        display: none;
    }
}
</style>
