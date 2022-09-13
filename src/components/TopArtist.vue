<template>
    <main>
        <div class="top-artist">
            <div class="title"><h2>Top Artists</h2></div>
            <div class="songs">
                <SongCard
                    artistName="Post Malone"
                    songTitle="Stoney"
                    albumCover="album3.jpg"
                />
                <SongCard
                    artistName="21 Savage"
                    songTitle="Bank Account"
                    albumCover="album4.jpg"
                />
                <SongCard
                    artistName="Juice Wrld"
                    songTitle="Robbery"
                    albumCover="album2.jpg"
                />
                <SongCard
                    artistName="Post Malone"
                    songTitle="Stoney"
                    albumCover="album3.jpg"
                />
                <SongCard
                    artistName="21 Savage"
                    songTitle="Bank Account"
                    albumCover="album4.jpg"
                />
                <SongCard
                    artistName="Juice Wrld"
                    songTitle="Robbery"
                    albumCover="album2.jpg"
                />
                <SongCard
                    artistName="Post Malone"
                    songTitle="Stoney"
                    albumCover="album3.jpg"
                />
                <SongCard
                    artistName="21 Savage"
                    songTitle="Bank Account"
                    albumCover="album4.jpg"
                />
                <SongCard
                    artistName="Juice Wrld"
                    songTitle="Robbery"
                    albumCover="album2.jpg"
                />
            </div>
        </div>
    </main>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
export default {
    components: { SongCard },
};
</script>

<style>
.songs {
    display: flex;
    overflow: scroll;
    overflow-y: hidden;
}
.top-artist {
    padding-top: 20px;
}
.top-artist .title {
    font-weight: 600;
}
@media screen and (max-width: 328px) {
    .top-artist {
        padding-left: 20px;
    }
}
</style>
