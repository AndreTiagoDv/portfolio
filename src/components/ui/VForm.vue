<script setup>
import { ref } from "vue";
import VButton from "./VButton.vue";
import { supabase } from "../services/supabase.js";

const nome = ref("");
const email = ref("");
const message = ref("");

const enviarFormulario = async () => {
    if (!nome.value || !email.value || !message.value) {
        alert("Preencha todos os campos!");
        return;
    }

    const { data, error } = await supabase
        .from('contatos')
        .insert([
            { nome: nome.value, email: email.value, mensagem: message.value }
        ]);

    if (error) {
        alert("Erro ao enviar: " + error.message);
    } else {
        alert("Formulário enviado com sucesso!");
        nome.value = "";
        email.value = "";
        message.value = "";
    }
};
</script>


<template>
    <form @submit.prevent="enviarFormulario" class="contact-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Seu Nome" v-model="nome">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="seu@email.com" v-model="email">
        <label for="message">Mensagem:</label>
        <textarea id="message" placeholder="Como posso ajudar?" v-model="message"></textarea>

        <VButton class="form-button" @button-clicked=" " :is-primary="true" button-text="Enviar Mensagem" />

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