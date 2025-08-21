<script setup>
import { ref } from "vue";
import VButton from "./VButton.vue";
import { supabase } from "../services/supabase.js";

const name = ref("");
const email = ref("");
const message = ref("");

const sendForm = async () => {
    if (!name.value || !email.value || !message.value) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        const response = await fetch("https://lxrzkspegyjlgmfsgkli.supabase.co/functions/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })
        });

        const result = await response.json();

        if (result.success) {
            alert("Mensagem enviada para seu e-mail!");
            name.value = "";
            email.value = "";
            message.value = "";
        } else {
            alert("Erro ao enviar email: " + result.error);
        }
    } catch (err) {
        alert("Erro ao enviar formulário: " + err.message);
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

        <VButton class="form-button" @button-clicked="sendForm" :is-primary="true" button-text="Enviar Mensagem" />

    </form>
</template>

<style scoped>
.contact-form {
    flex: 1;

}

.contact-form label {
    font-weight: bold;
}

.contact-form input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
}

.contact-form textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid #d1d5db;
}

.form-button {
    width: 30%;
}
</style>