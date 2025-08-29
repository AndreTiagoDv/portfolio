<script setup lang="ts">
  import VButtonTheme from '../ui/VButtonTheme.vue';
</script>

<template>
  <div class="container">
    <VButtonTheme class="dark-mode" />
  </div>
</template>

<style scoped>
  .container {
    background-color: var(--color-bg);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    box-shadow: var(--color-box-shadow);
  }
</style>
