<script setup lang="ts">
  import VText from './VText.vue';
  import { CIcon } from '@coreui/icons-vue';

  defineProps<{
    title: string;
    description?: string;
    image?: string;
    icon?: string;
  }>();
</script>

<template>
  <div class="card-container">
    <div v-if="image">
      <img class="img-card" :src="image" />
      <div class="img-text">
        <VText type="paragraph">{{ title }}</VText>
        <VText type="description">{{ description }}</VText>
      </div>
    </div>
    <div v-if="icon" class="container-icon">
      <CIcon class="icon-card" :icon="icon" />
      <VText type="paragraph">{{ title }}</VText>
      <VText type="description">{{ description }}</VText>
    </div>
  </div>
</template>

<style scoped>
  .card-container {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 10px 30px -10px var(--color-box-shadow);
    transition: transform 0.5s ease;
    justify-content: center;
  }

  .img-card {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .img-card:hover {
    transform: scale(1.01);
  }

  .icon-card {
    width: 1.3rem;
    background-color: var(--color-neutral-50);
    padding: 0.66rem;
    border-radius: 0.5rem;
    color: var(--color-primary);
    fill: var(--color-primary);
  }

  .container-icon {
    flex-direction: row;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

  .img-text {
    min-height: 5rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
