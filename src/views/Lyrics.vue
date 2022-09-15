<template>
    <main>
        <div class="lyrics-main">
            <SongBar
                albumCover="album1.jpg"
                songTitle="Final Countdown"
                artistName="Paa Bobo"
                duration="3:16"
            />
            <SongBar
                albumCover="album3.jpg"
                songTitle="River Flows in You"
                artistName="Yiruma"
                duration="6:03"
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
                albumCover="album1.jpg"
                songTitle="Despacito"
                artistName="Michael Jackson"
                duration="5:46"
            />
            <SongBar
                albumCover="album1.jpg"
                songTitle="Final Countdown"
                artistName="Paa Bobo"
                duration="3:16"
            />
            <SongBar
                albumCover="album3.jpg"
                songTitle="River Flows in You"
                artistName="Yiruma"
                duration="6:03"
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
                albumCover="album1.jpg"
                songTitle="Despacito"
                artistName="Michael Jackson"
                duration="5:46"
            />
            <SongBar
                albumCover="album1.jpg"
                songTitle="Final Countdown"
                artistName="Paa Bobo"
                duration="3:16"
            />
            <SongBar
                albumCover="album3.jpg"
                songTitle="River Flows in You"
                artistName="Yiruma"
                duration="6:03"
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
                albumCover="album1.jpg"
                songTitle="Despacito"
                artistName="Michael Jackson"
                duration="5:46"
            />
            <SongBar
                albumCover="album3.jpg"
                songTitle="River Flows in You"
                artistName="Yiruma"
                duration="6:03"
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
                albumCover="album1.jpg"
                songTitle="Despacito"
                artistName="Michael Jackson"
                duration="5:46"
            />
        </div>
    </main>
</template>

<script>
import SongBar from "@/components/SongBar.vue";
export default {
    components: {
        SongBar,
    },
};
</script>

<style>
.lyrics-main {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
}

@media screen and (max-width: 820px) {
    .lyrics-main {
        flex-direction: column;
        flex-wrap: wrap;
        overflow: scroll;
        overflow-y: hidden;
    }
}
</style>
