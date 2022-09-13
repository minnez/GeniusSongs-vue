<template>
    <main>
        <div class="artist-main">ARTISTE</div>
        <div v-if="showModal">
            <Modal @close="closemodal">
                <Register />
            </Modal>
        </div>
    </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import Register from "../components/Register.vue";
import Modal from "../components/Modal.vue";
export default {
    components: { Register, Modal },
    setup() {
        const showModal = ref(true);

        const closemodal = () => {
            showModal.value = !showModal.value;
        };

        return { showModal, closemodal };
    },
};
</script>

<style>
.artist-main {
    height: 100%;
    font-size: 4rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}
</style>
