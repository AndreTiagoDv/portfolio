<script setup>
import VButton from "./VButton.vue";
import { CIcon } from '@coreui/icons-vue';
import { cibMinutemailer } from '@coreui/icons'
import { useContactForm } from "@/composables/useContactForm";

const { name, email, message, loading, sendForm } = useContactForm();

</script>

<template>
    <form @submit.prevent="sendForm" class="contact-form">
        <label for="name">Nome:</label>
        <input type="text" id="name" placeholder="Seu Nome" v-model="name">

        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="seu@email.com" v-model="email">

        <label for="message">Mensagem:</label>
        <textarea id="message" placeholder="Como posso ajudar?" v-model="message"></textarea>

        <div>
            <VButton class="form-button" :disabled="loading" :is-primary="true" @button-clicked="sendForm">
                Enviar
                <CIcon :icon="cibMinutemailer" class="icon-form" />
            </VButton>
        </div>
    </form>
</template>

<style scoped>
.contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form label {
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
}

.form-button {
    width: 40%;
    align-self: flex-start;
}

.icon-form {
    max-width: 1.5rem;
    align-items: center;
    fill: bisque;
}

@media (max-width: 768px) {
    .form-button {
        width: 40%;
        align-self: flex-start;
    }

    .icon-form {
        display: none;
    }

}
</style>
