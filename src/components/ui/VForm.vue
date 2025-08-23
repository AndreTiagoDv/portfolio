<script setup>
import { ref } from "vue";
import VButton from "./VButton.vue";
import { CIcon } from '@coreui/icons-vue';
import { cibMinutemailer } from '@coreui/icons'



const name = ref("");
const email = ref("");
const message = ref("");
const loading = ref(false);

const sendForm = async () => {
    if (!name.value || !email.value || !message.value) {
        alert("Preencha todos os campos!");
        return;
    }

    loading.value = true;

    try {
        const response = await fetch("https://lxrzkspegyjlgmfsgkli.supabase.co/functions/v1/resend-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })
        });

        const result = await response.json();

        if (response.ok && result.success) {
            alert("Mensagem enviada com sucesso!");
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
            alert("Erro ao enviar email: " + (result.error || "Erro desconhecido"));
        }

    } catch (err) {
        alert("Erro ao enviar formulário: " + err.message);
    } finally {
        loading.value = false;
    }
};
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
