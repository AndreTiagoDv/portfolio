<script setup>
import VText from './ui/VText.vue';
import VForm from './ui/VForm.vue';


import { cibGithub, cibLinkedin, cibMinutemailer, } from '@coreui/icons';
import VButtonIcon from './ui/VButtonIcon.vue';
const items = [
    { id: 1, information: 'Github', icon: cibGithub, url:'https://github.com/AndreTiagoDv' },
    { id: 2, information: 'Linkedin', icon: cibLinkedin, url:'https://www.linkedin.com/in/andre-tiago-80773a298/' },
    { id: 3, information: 'E-mail', icon: cibMinutemailer }

];

</script>

<template>
    <div class="section-container" id="contactSection">
        <div class="section-content">
            <VText type="title" style="margin:0">VAMOS CONVERSAR</VText>
            <VText type="highlight" style="margin:0">Contato</VText>
            <VText type="description" style="margin:0">
                Preencha o formulário e retornarei o mais breve possível.
            </VText>

            <div class="contact-grid">
                <div class="form-container">
                    <VForm />
                </div>

                <ul class="container-card">
                    <li class="content-button" v-for="item in items">
                        <VButtonIcon class="button" :tooltip="item.information" :key="item.id" :icon="item.icon" :url="item.url" />

                    </li>
                </ul>

            </div>
        </div>
    </div>

</template>


<style scoped>

.contact-grid {
    display: flex;
    gap: 2rem;

}

.form-container {
    flex: 1;
    padding: 1rem;
}

.container-card {
    height: 2.5rem;
    flex: 1;
    padding: 1rem;
    box-shadow: rgba(54, 254, 251, 0.481)0px 5px 15px;
    border-radius: 1rem;
    gap: 1rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3,auto);
    justify-content: left;
}

</style>