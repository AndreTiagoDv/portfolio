<script setup lang="ts">
  import VText from '@/components/ui/vtext/VText.vue';
  import VImage from '../ui/vimage/VImage.vue';
</script>

<template>
  <section class="section-container" id="SectionAboutMe" aria-labelledby="about-me-title">
    <div class="section-img-container">
      <VImage
        name="about-me"
        alt="Imagem ilustrativa com computador e café em um ambiente de trabalho"
        class-name="section-img-content"
      />
    </div>
    <div class="section-content">
      <VText id="about-me-title" type="highlight">Sobre mim</VText>
      <VText type="paragraph"
        >Olá! Eu sou um profissional multidisciplinar que une design e desenvolvimento para criar
        interfaces limpas, eficientes e memoráveis. Acredito em um processo colaborativo, orientado
        por dados e que valoriza a simplicidade e a performance. Minha especialidade é transformar
        ideias em produtos digitais com código moderno, acessível e escalável.</VText
      >
    </div>
  </section>
</template>

<style></style>
