<template>
    <div class="wrapper-main">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/lyrics">Lyrics</router-link>
            <router-link to="/album">Album</router-link>
            <router-link to="/artist">Artist</router-link>
            <router-link to="/my-songs">My songs</router-link>
        </nav>
        <main>
            <router-view />
        </main>
    </div>
</template>

<style>
#app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
}
.wrapper-main {
    display: grid;
    grid-template-columns: 200px auto;
    height: 100%;
    outline: 1px solid red;
}
.wrapper-main nav {
    display: flex;
    flex-direction: column;
    outline: 1px solid #8f0fc5;
}
.wrapper-main main {
    outline: 1px solid blue;
    height: 100%;
}

nav a {
    font-weight: bold;
}

nav a.router-link-exact-active {
    color: #8f0fc5;
}
</style>
