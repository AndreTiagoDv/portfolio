<script setup lang="ts">
  import VButton from './VButton.vue';
  import type { VButtonProps } from '@/types/VButton';
  import { useTheme } from '@/composables/useTheme';
  import { computed } from 'vue';
  import { cilMoon, cilSun } from '@coreui/icons';

  defineProps<VButtonProps>();
  const { theme, toggleTheme } = useTheme();

  const themeIcon = computed(() => (theme.value === 'dark' ? cilMoon : cilSun));
</script>

<template>
  <VButton variant="theme" :disabled="false" @button-clicked="toggleTheme" :icon="themeIcon" />
</template>

<style></style>
