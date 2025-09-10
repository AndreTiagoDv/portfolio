<script setup>
  import './vformStyle.scss';
  import VButton from '@/components/ui/vbutton/VButton.vue';
  import { cibMinutemailer } from '@coreui/icons';
  import { useContactForm } from '@/composables/useContactForm';

  const { name, email, message, loading, sendForm } = useContactForm();
</script>

<template>
  <form class="contact-form">
    <label for="name">Nome:</label>
    <input id="name" v-model="name" type="text" placeholder="Seu Nome" />

    <label for="email">Email:</label>
    <input id="email" v-model="email" type="email" placeholder="seu@email.com" />

    <label for="message">Mensagem:</label>
    <textarea id="message" v-model="message" placeholder="Como posso ajudar?"></textarea>

    <div>
      <VButton
        class="form-button"
        :disabled="loading"
        variant="primary"
        @button-clicked="sendForm"
        button-text="Enviar"
        :icon="cibMinutemailer"
      />
    </div>
  </form>
</template>

<style scoped></style>
