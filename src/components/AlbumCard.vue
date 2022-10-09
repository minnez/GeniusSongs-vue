<template>
    <div>
        <router-link
            :to="{
                name: 'albumdetails',
                params: { id: link },
            }"
        >
            <div class="album-card">
                <div
                    class="album-cover"
                    :style="{
                        'background-image': `url(${cover})`,
                    }"
                ></div>
                <div class="album-name">{{ name }}</div>
                <div class="album-artist">{{ owner }}</div>
                <div class="year">{{ year }}</div>
            </div></router-link
        >
    </div>
</template>

<script>
export default {
    props: ["link", "name", "cover", "owner", "year"],
    setup() {},
};
</script>

<style>
.album-card {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    max-width: 200px;
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
