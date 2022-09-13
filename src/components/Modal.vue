<template>
    <div class="backdrop" @click.self="closemodal">
        <div class="modal"><slot /></div>
    </div>
</template>

<script>
export default {
    setup(props, context) {
        const closemodal = () => {
            context.emit("close");
        };

        return { closemodal };
    },
};
</script>

<style>
.backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
}
.modal {
    height: fit-content;
    width: fit-content;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
</style>
