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
  <header class="container">
    <nav aria-label="Menu principal">
      <VMenu :items="navigatorMenu" />
    </nav>
    <VButtonTheme aria-label="Alternar entre tema claro e escuro" />
  </header>
</template>

<style scoped>
  .container {
    background-color: var(--color-bg);
    display: flex;
    justify-content: space-between;
  }
</style>
