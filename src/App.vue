<template>
    <div class="wrapper-main">
        <Navbar />
        <main>
            <router-view />
        </main>
    </div>
</template>
<script>
import Navbar from "./components/navBar.vue";
export default {
    components: {
        Navbar,
    },
};
</script>
<style>
#app {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(227, 255, 248);
    background: linear-gradient(
        180deg,
        rgba(227, 255, 248, 1) 0%,
        rgba(117, 255, 220, 1) 61%,
        rgba(111, 216, 233, 1) 100%
    );
}

.wrapper-main {
    display: grid;
    grid-template-columns: 250px auto;
    height: 100%;
    outline: 1px solid red;
}
.wrapper-main main {
    height: 100%;
}

nav a.router-link-exact-active {
    color: #000;
    background: rgb(227, 255, 248);
    background: linear-gradient(
        90deg,
        rgba(111, 216, 233, 1) 0%,
        rgba(117, 255, 220, 1) 61%,
        rgba(227, 255, 248, 1) 100%
    );
}
@media screen and (max-width: 820px) {
    .wrapper-main {
        grid-template-columns: 60px auto;
    }
}
@media screen and (max-width: 450px) {
    .wrapper-main {
        display: flex;
        flex: auto 60px;
        flex-direction: column-reverse;
    }
}
</style>
