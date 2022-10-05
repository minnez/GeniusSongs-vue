<template>
    <div class="loading">
        <div class="barr one"></div>
        <div class="barr two"></div>
        <div class="barr three"></div>
        <div class="barr four"></div>
        <div class="barr five"></div>
        <div class="barr six"></div>
        <div class="barr seven"></div>
    </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes beat {
    0% {
        transform: scaley(-50%);
        background-color: rgba(111, 216, 233, 0.4);
    }
    50% {
        transform: scaley(100%);
        background-color: rgb(11, 218, 250);
    }
    100% {
        transform: scaley(-50%);
        background-color: rgba(111, 216, 233, 0.4);
    }
}
.loading {
    height: fit-content;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.barr {
    animation: 2.1s linear infinite beat;
    width: 5px;
    height: 40px;
    background-color: rgb(11, 218, 250);
    margin: 1px;
}
.one {
    animation-delay: 0.3s;
}
.two {
    animation-delay: 0.6s;
}
.three {
    animation-delay: 0.9s;
}
.four {
    animation-delay: 1.2s;
}
.five {
    animation-delay: 1.5s;
}
.six {
    animation-delay: 1.8s;
}
.seven {
    animation-delay: 0s;
}
</style>
