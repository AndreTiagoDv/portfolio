<script setup lang="ts">
import Text from './ui/VText.vue';
import AboutImage from '@/assets/about-me.jpg'
</script>

<template>
    <div class="section-container">
        <div class="section-img-container">
            <img class="section-img-content" :src="AboutImage" alt="about-me"></img>
        </div>
        <div class="section-content">
            <Text style="margin: 0px;"type="highlight">Sobre mim</Text>
            <Text style="margin: 0px;" type="description">Olá! Eu sou um profissional multidisciplinar que une design e desenvolvimento para criar
                interfaces limpas, eficientes e memoráveis. Acredito em um processo colaborativo, orientado por dados e
                que valoriza a simplicidade e a performance.
                Minha especialidade é transformar ideias em produtos digitais com código moderno, acessível e
                escalável.</Text>
        </div>

    </div>

</template>

<style>
</style>