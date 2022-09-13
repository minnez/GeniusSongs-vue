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
.action-nav .input {
    margin-left: 40px;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.05),
        -1px -1px 25px rgba(0, 0, 0, 0.05);
}
.action-nav .inputTerm {
    padding-left: 5px;
}
@media screen and (max-width: 540px) {
    .action-nav .input {
        margin-left: 15px;
    }
}
@media screen and (max-width: 328px) {
    .action-nav .input {
        width: 120px;
        margin-left: 0;
    }
}
</style>
