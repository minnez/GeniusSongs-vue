<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="input">
                <span class="inputIcon"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input placeholder="Search" class="inputTerm" type="text" />
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
            <TopArtist />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import TopArtist from "@/components/TopArtist.vue";
export default {
    name: "HomeView",
    components: { TopArtist },
};
</script>
<style scoped>
.home-main {
    height: 100%;
    padding-left: 20px;
    display: grid;
    grid-template-rows: 70px auto;
}
.action-nav {
    border-bottom: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.action-nav .profile {
    padding: 10px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 150px;
}
.home-content {
    overflow: hidden;
}

.action-nav .input {
    margin-left: 40px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.05),
        -1px -1px 25px rgba(0, 0, 0, 0.05);
}
.action-nav .inputTerm {
    padding-left: 5px;
}

.profile .profile-pic {
    width: 35px;
    height: 35px;
    background-image: url("../assets/album2.jpg");
    background-size: cover;
    border-radius: 50%;
    margin-right: 5px;
    border: 1px solid #fff;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.328);
}

@media screen and (max-width: 540px) {
    .action-nav .input {
        margin-left: 15px;
    }
}
@media screen and (max-width: 328px) {
    .action-nav .input {
        width: 120px;
        margin-left: 15px;
    }
    .top-artist {
        padding-left: 20px;
    }
    .home-main {
        padding-left: 0;
    }
    .profile-name {
        display: none;
    }
    .action-nav .profile {
        min-width: 100px;
    }
}
</style>
