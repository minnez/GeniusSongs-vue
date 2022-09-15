<template>
    <div class="topart">
        <div class="top-artist">
            <div class="title"><h2>Top Songs</h2></div>
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
    </div>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
export default {
    components: { SongCard },
};
</script>

<style>
.songs {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-y: hidden;
}
.topart {
    height: 100%;
}
.top-artist {
    padding-top: 20px;
    display: grid;
    grid-template-rows: 30px auto;
    height: 100%;
}
.top-artist .title {
    font-weight: 600;
}
@media screen and (max-width: 328px) {
    .title {
        padding-left: 20px;
    }
    .songs {
        padding-left: 20px;
    }
}
</style>
