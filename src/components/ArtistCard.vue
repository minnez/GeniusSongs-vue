<template>
    <div>
        <router-link to="/artist-details/456">
            <div class="artist-card">
                <div
                    class="artist-cover"
                    :style="{
                        'background-image': `url(${picture})`,
                    }"
                ></div>
                <div class="artist-name">{{ name }}</div>
            </div></router-link
        >
    </div>
</template>

<script>
export default {
    props: ["artistId", "name", "picture"],
};
</script>

<style>
.artist-card {
    min-width: 240px;
    margin: 10px;
    display: flex;
    border-radius: 20px;
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    box-shadow: 0.2px 0.2px 10px rgba(0, 0, 0, 0.139);
}
.artist-cover {
    height: 80px;
    width: 80px;
    border-radius: 15px;
    background-size: cover;
    margin-right: 20px;
    box-shadow: 0.2px 0.2px 10px rgba(0, 0, 0, 0.139);
}
.artist-card .artist-name {
    font-size: 1.2rem;
    margin-right: 20px;
}
@media screen and (max-width: 820px) {
    .artist-cover {
        height: 60px;
        width: 60px;
    }
}
</style>
