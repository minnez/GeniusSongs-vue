<template>
    <div class="home-main">
        <div class="action-nav">
            <div class="search">
                <span class="searchButton"
                    ><i class="fa-solid fa-magnifying-glass"></i
                ></span>
                <input placeholder="Search" class="searchTerm" type="text" />
            </div>
            <div class="profile">
                <img src="" alt="" />
                <span>Forzan</span>
            </div>
        </div>
        <div class="home-content">HOME</div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "HomeView",
    components: {},
};
</script>
<style>
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
.action-nav .search {
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.05),
        -1px -1px 25px rgba(0, 0, 0, 0.05);

    max-width: 200px;
    margin-left: 40px;
    border-radius: 8px;
    padding: 5px 10px;
    background: #fff;
}
.action-nav .searchTerm {
    width: 100%;
    padding: 10px 16px;
    padding-left: 5px;
    border-radius: 8px;
    outline: none;
    border: none;
    color: inherit;
}
.action-nav.searchButton {
    width: 40px;
    text-align: center;
    cursor: pointer;
    color: inherit;
}
.action-nav .profile {
    padding: 20px;
    font-weight: 200;
}
.home-content {
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #fff;
}
@media screen and (max-width: 540px) {
    .action-nav .search {
        margin-left: 15px;
    }
}
@media screen and (max-width: 328px) {
    .action-nav .search {
        width: 120px;
        margin-left: 0;
    }
}
</style>
