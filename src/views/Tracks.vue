<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="input">
                <span class="inputIcon"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input
                    placeholder="Search Tracks"
                    class="inputTerm"
                    type="text"
                />
            </div>
            <div class="profile">
                <div class="profile-pic"></div>
                <span class="profile-name">Forzan</span>
                <i
                    style="color: rgba(111, 216, 233, 1); cursor: pointer"
                    class="fa-solid fa-circle-chevron-down"
                ></i>
            </div>
        </div>

        <div class="home-content">
            <SongBar
                albumCover="album4.jpg"
                songTitle="Runaway"
                artistName="21 Savage"
                duration="4:46"
                trackId="sdf"
            />
            <SongBar
                albumCover="album1.jpg"
                songTitle="Despacito"
                artistName="Michael Jackson"
                trackId="sdf"
                duration="5:46"
            />
            <SongBar
                albumCover="album3.jpg"
                songTitle="River Flows in You"
                trackId="sdf"
                artistName="Yiruma"
                duration="6:03"
            />
            <SongBar
                albumCover="album2.jpg"
                songTitle="Funky Friday"
                trackId="sdf"
                artistName="Ohemaa Mercy"
                duration="3:26"
            />
            <SongBar
                trackId="sdf"
                albumCover="album4.jpg"
                songTitle="Runaway"
                artistName="21 Savage"
                duration="4:46"
            />
            <SongBar
                albumCover="album1.jpg"
                songTitle="Despacito"
                trackId="sdf"
                artistName="Michael Jackson"
                duration="5:46"
            />
            <SongBar
                albumCover="album1.jpg"
                songTitle="Despacito"
                artistName="Michael Jackson"
                trackId="sdf"
                duration="5:46"
            />
            <SongBar
                albumCover="album3.jpg"
                songTitle="River Flows in You"
                artistName="Yiruma"
                trackId="sdf"
                duration="6:03"
            />
            <SongBar
                albumCover="album2.jpg"
                songTitle="Funky Friday"
                artistName="Ohemaa Mercy"
                trackId="sdf"
                duration="3:26"
            />
            <SongBar
                albumCover="album4.jpg"
                trackId="sdf"
                songTitle="Runaway"
                artistName="21 Savage"
                duration="4:46"
            />
            <SongBar
                albumCover="album1.jpg"
                trackId="sdf"
                songTitle="Despacito"
                artistName="Michael Jackson"
                duration="5:46"
            />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import SongBar from "@/components/SongBar.vue";
export default {
    components: { SongBar },
};
</script>
<style scoped>
.home-content {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
    align-items: center;
}

@media screen and (max-width: 820px) {
    .home-content {
        flex-direction: column;
        flex-wrap: wrap;
        overflow: scroll;
        overflow-y: hidden;
    }
}
</style>
