<script setup lang="ts">
  import VText from '@/components/ui/vtext/VText.vue';
  import { CIcon } from '@coreui/icons-vue';
  import './vcardStyle.scss';

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
        <VText type="title">{{ title }}</VText>
        <VText type="description">{{ description }}</VText>
      </div>
    </div>
    <div v-if="icon" class="container-icon">
      <CIcon class="icon-card" :icon="icon" />
      <VText type="title">{{ title }}</VText>
      <VText type="description">{{ description }}</VText>
    </div>
  </div>
</template>

<style scoped></style>
