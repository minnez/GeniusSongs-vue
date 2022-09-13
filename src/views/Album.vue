<template>
    <main>
        <div class="album-main">
            ALBUM
            <button @click="togglemodal">Modal</button>
        </div>
        <div v-if="showModal">
            <Modal @close="togglemodal">
                <Login />
            </Modal>
        </div>
    </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import Modal from "../components/Modal.vue";
import Login from "../components/Login.vue";
export default {
    components: {
        Modal,
        Login,
    },
    setup() {
        const showModal = ref(false);
        const togglemodal = () => {
            showModal.value = !showModal.value;
        };

        return { showModal, togglemodal };
    },
};
</script>

<style>
.album-main {
    height: 100%;
    font-size: 4rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}
</style>
