<script setup lang="ts">
  import VText from '@/components/ui/vtext/VText.vue';
  import VImage from '../ui/vimage/VImage.vue';
</script>

<template>
  <div class="section-container" id="SectionAboutMe">
    <div class="section-img-container">
      <VImage
        name="about-me"
        alt="Imagem de um computador e cafe"
        class-name="section-img-content"
      />
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
