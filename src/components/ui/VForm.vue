<script setup>
import VButton from "./VButton.vue";
import { CIcon } from '@coreui/icons-vue';
import { cibMinutemailer } from '@coreui/icons'
import { useContactForm } from "@/composables/useContactForm";

const { name, email, message, loading, sendForm } = useContactForm();

</script>

<template>
    <form class="contact-form">
        <label for="name">Nome:</label>
        <input id="name" v-model="name" type="text" placeholder="Seu Nome">

        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" placeholder="seu@email.com">

        <label for="message">Mensagem:</label>
        <textarea id="message" v-model="message" placeholder="Como posso ajudar?"></textarea>

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
