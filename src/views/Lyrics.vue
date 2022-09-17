<template>
    <main>
        <Loading />
    </main>
</template>

<script>
import Loading from "@/components/loading/Loading.vue";
export default {
    components: {
        Loading,
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
