<template>
    <nav class="nav-main">
        <div class="design">
            <div class="cir one"></div>
            <div class="cir two"></div>
            <div class="cir three"></div>
        </div>
        <div class="br"></div>
        <div class="links">
            <router-link to="/"
                ><i class="fa-solid fa-house"></i><span>Home</span></router-link
            >
            <router-link to="/tracks"
                ><i class="fa-solid fa-music"></i
                ><span>Tracks</span></router-link
            >
            <router-link to="/album"
                ><i class="fa-solid fa-record-vinyl"></i
                ><span>Album</span></router-link
            >
            <router-link to="/artist"
                ><i class="fa-solid fa-user"></i
                ><span>Artiste</span></router-link
            >
            <router-link to="/my-songs"
                ><i class="fa-solid fa-folder"></i
                ><span>My songs</span></router-link
            >
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-main {
    background-color: #fff;
    box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.15);
}
.nav-main .links {
    margin-top: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.nav-main .links a {
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
}
.nav-main .links a i {
    padding-right: 20px;
}
.design {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    padding-top: 20px;
}
.cir {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 6px;
}
.one {
    background-color: #00b472;
}
.two {
    background-color: #b0cb04;
}
.three {
    background-color: red;
}
.br {
    width: 70%;
    margin: auto;
    border-top: 0.2px solid #ccc;
    margin-top: 20px;
}
@media screen and (max-width: 820px) {
    .nav-main .links span {
        display: none;
    }
    .nav-main .links {
        padding: 10px;
    }
    .design {
        padding-left: 5px;
    }
    .cir {
        margin: 3px;
    }
}
@media screen and (max-width: 450px) {
    .nav-main .links {
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 0;
    }
    .design {
        display: none;
    }
    .br {
        display: none;
    }
}
</style>
