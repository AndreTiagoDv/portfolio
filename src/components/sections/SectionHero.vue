<script setup>
  import Image from '@/assets/images/hero.jpg';
  import VText from '@/components/ui/vtext/VText.vue';
  import Button from '@/components/ui/vbutton/VButton.vue';
  import { cilArrowRight } from '@coreui/icons';
</script>

<template>
  <div class="section-container">
    <div class="section-content">
      <VText type="title">PORTFÓLIO PROFISSIONAL</VText>
      <VText type="highlight">Criatividade que entrega resultados</VText>
      <VText type="paragraph"
        >Sou designer e desenvolvedor focado em construir experiências digitais modernas, acessíveis
        e com alta performance.</VText
      >
      <div class="buttons-hero">
        <div class="buttons">
          <Button
            variant="primary"
            target-id="SectionProjects"
            @button-clicked="handleClick"
            button-text="Ver Portfolio"
            :icon="cilArrowRight"
          />
          <Button
            variant="secondary"
            button-text="Fale comigo"
            target-id="SectionContacts"
            @button-clicked="handleClick"
          />
        </div>
      </div>
    </div>
    <div class="section-img-container">
      <img class="section-img-content" :src="Image" alt="Descrição da imagem" />
    </div>
  </div>
</template>

<style scoped>
  .buttons {
    flex: 1;
    flex-direction: row;
    display: flex;
    gap: 0.7rem;
  }

  .icon-hero {
    max-width: 1.5rem;
    align-items: center;
  }
</style>
