<script setup lang="ts">
  import VButtonTheme from '../ui/vbuttonTheme/VButtonTheme.vue';
  import VMenu from '../ui/vmenu/VMenu.vue';

  const navigatorMenu = [
    { id: 1, name: 'Apresentação', targetId: 'SectionHero' },
    { id: 2, name: 'Sobre mim', targetId: 'SectionAboutMe' },
    { id: 3, name: 'Projetos', targetId: 'SectionProjects' },
    { id: 4, name: 'Habilidades', targetId: 'SectionSkills' },
    { id: 5, name: 'Contatos', targetId: 'SectionContacts' },
  ];
</script>

<template>
  <div class="container">
    <VMenu :items="navigatorMenu" />
    <VButtonTheme />
  </div>
</template>

<style scoped>
  .container {
    background-color: var(--color-bg);
    display: flex;
    justify-content: space-between;
  }
</style>
