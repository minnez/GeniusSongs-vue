<template>
    <div class="topart">
        <div class="top-artist">
            <div class="title"><h2>Trending Songs</h2></div>
            <div class="songs">
                <!-- <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, neque accusamus eligendi repellat doloremque officia
                    laudantium corrupti nulla atque reiciendis? Vel ullam
                    deleniti earum tenetur at omnis, doloremque sed iste! Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Est
                    totam dicta dolorem repellendus laborum reprehenderit,
                    consequatur facilis magni necessitatibus. Doloremque
                    veritatis repudiandae numquam enim dolor quam harum eaque
                    doloribus ut. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Assumenda modi debitis illum, tempora ab
                    rem porro corrupti expedita hic id veniam amet doloribus
                    aperiam reprehenderit mollitia, molestias eos deserunt?
                    Voluptate.
                </h1> -->
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
    .top-artist {
        padding-left: 20px;
    }
}
</style>
