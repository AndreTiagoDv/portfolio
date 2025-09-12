<script setup lang="ts">
  import VText from '@/components/ui/vtext/VText.vue';
  import AboutImage from '@/assets/images/about-me.jpg';
</script>

<template>
  <div class="section-container" id="SectionAboutMe">
    <div class="section-img-container">
      <img class="section-img-content" :src="AboutImage" alt="about-me" />
    </div>
    <div class="section-content">
      <VText type="highlight">Sobre mim</VText>
      <VText type="paragraph"
        >Olá! Eu sou um profissional multidisciplinar que une design e desenvolvimento para criar
        interfaces limpas, eficientes e memoráveis. Acredito em um processo colaborativo, orientado
        por dados e que valoriza a simplicidade e a performance. Minha especialidade é transformar
        ideias em produtos digitais com código moderno, acessível e escalável.</VText
      >
    </div>
  </div>
</template>

<style></style>
