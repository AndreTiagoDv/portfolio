<script setup>
import VText from './ui/VText.vue';
import VForm from './ui/VForm.vue';


import { cibGithub, cibLinkedin, cibMinutemailer, } from '@coreui/icons';
import VButtonIcon from './ui/VButtonIcon.vue';
const items = [
    { id: 1, information: 'Github', icon: cibGithub, url: 'https://github.com/AndreTiagoDv' },
    { id: 2, information: 'Linkedin', icon: cibLinkedin, url: 'https://www.linkedin.com/in/andre-tiago-80773a298/' },
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
                <div class="container-card">
                    <VText type="title">Redes Sociais</VText>
                    <ul class="content-card" style="margin: 0px; padding: 0px;">
                        <li class="content-button" v-for="item in items">
                            <VButtonIcon class="button" :tooltip="item.information" :key="item.id" :icon="item.icon"
                                :url="item.url" />

                        </li>
                    </ul>
                </div>

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
    flex: 1;
    padding: 1rem;
    box-shadow: rgba(54, 254, 251, 0.501)0px 10px 30px -10px;
    border-radius: 1rem;
    flex-direction: column;
    justify-content: center;
    display: flex;
    justify-content: flex-start;
    height: 20%;

}

.content-card {
    gap: 1rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: left;
    flex-direction: column;
    padding: 1rem;
    margin-top: 0px;
}
</style>