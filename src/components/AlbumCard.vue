<template>
    <div>
        <router-link to="/album-details/123">
            <div class="album-card">
                <div
                    class="album-cover"
                    :style="{
                        'background-image': `url(https://i.scdn.co/image/ab67616d00001e028b52c6b9bc4e43d873869699)`,
                    }"
                ></div>
                <div class="album-name">DAMN</div>
                <div class="album-artist">Kendrick Lamar</div>
                <div class="year">2017</div>
            </div></router-link
        >
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>

<style>
.album-card {
    width: fit-content;
}
.album-card .album-cover {
    width: 150px;
    height: 150px;
    background-size: contain;
    border-radius: 20px;
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.324);
    margin: 10px 10px;
}
.album-card .album-name {
    font-weight: 600;
    padding: 0 5px;
}
.album-card .album-artist {
    font-weight: 200;
    padding: 0 5px;
}
.album-card .year {
    padding: 0 5px;
}
@media screen and (max-width: 540px) {
    .album-card .album-cover {
        width: 100px;
        height: 100px;
    }
}
</style>
