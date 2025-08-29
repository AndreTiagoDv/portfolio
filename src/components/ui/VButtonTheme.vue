<script setup lang="ts">
  import VButton from './VButton.vue';
  import type { VButtonProps } from '@/types/VButton';
  import { useTheme } from '@/composables/useTheme';
  withDefaults(defineProps<VButtonProps>(), {
    disabled: false,
  });

  const { toggleTheme } = useTheme();
</script>

<template>
  <VButton variant="theme" :disabled="false" @button-clicked="toggleTheme" />
  <slot />
</template>

<style></style>
