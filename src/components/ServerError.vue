<template>
    <div class="server-error">
        <p>couldn't connect to the server</p>
        <p>you can try our other features 😉</p>
    </div>
</template>

<script>
export default {};
</script>

<style>
.server-error {
    position: relative;
    padding: 1rem;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.server-error::before {
    content: "";
    background-image: url(../assets/no-connection.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: auto;
    height: auto;
    z-index: 0;
}
.server-error p {
    z-index: 1;
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
}
</style>
