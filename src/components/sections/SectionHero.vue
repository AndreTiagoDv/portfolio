<script setup>
  import Image from '@/assets/images/hero.jpg';
  import Text from '../ui/VText.vue';
  import Button from '../ui/VButton.vue';
  import { cilArrowRight } from '@coreui/icons';
</script>

<template>
  <div class="section-container">
    <div class="section-content">
      <Text type="title">PORTFÓLIO PROFISSIONAL</Text>
      <Text type="highlight">Criatividade que entrega resultados</Text>
      <Text type="paragraph"
        >Sou designer e desenvolvedor focado em construir experiências digitais modernas, acessíveis
        e com alta performance.</Text
      >
      <div class="buttons-hero">
        <div class="buttons">
          <Button
            variant="primary"
            target-id="projectsSection"
            @button-clicked="handleClick"
            button-text="Ver Portfolio"
            :icon="cilArrowRight"
          />
          <Button
            variant="secondary"
            button-text="Fale comigo"
            target-id="contactSection"
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

  @media (max-width: 768px) {
    Button {
      white-space: nowrap;
    }

    .icon-hero {
      display: none;
    }
  }
</style>
