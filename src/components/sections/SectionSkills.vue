<script setup>
  import VText from '../ui/VText.vue';
  import VCard from '../ui/VCard.vue';

  import {
    cibTypescript,
    cibHtml5,
    cibReact,
    cibJavascript,
    cilPaintBucket,
    cibVueJs,
  } from '@coreui/icons';

  const items = [
    { id: 1, name: 'TypeScript', iconName: cibTypescript },
    { id: 2, name: 'HTML & CSS', iconName: cibHtml5 },
    { id: 3, name: 'React', iconName: cibReact },
    { id: 4, name: 'JavaScript', iconName: cibJavascript },
    { id: 5, name: 'UI/UX', iconName: cilPaintBucket },
    { id: 6, name: 'VueJs', iconName: cibVueJs },
  ];
</script>

<template>
  <div class="section-container">
    <div class="content-text">
      <VText type="title"> Tecnologias</VText>
      <VText type="highlight">Habilidades</VText>
      <VText type="paragraph"
        >Ferramentas e stacks que uso para criar produtos digitais modernos.
      </VText>
    </div>
  </div>

  <ul class="container-card">
    <li v-for="item in items" :key="item.id" class="content-card">
      <VCard :title="item.name" :icon="item.iconName" />
    </li>
  </ul>
</template>

<style scoped>
  .container-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    list-style: none;
    padding: 1rem;
    transition: transform 0.5s ease;
  }

  .content-card {
    transition: transform 0.3s ease;
  }

  .content-card:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .container-card {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      list-style: none;
      padding: 1rem;
    }
  }
</style>
