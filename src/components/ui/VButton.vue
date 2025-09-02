<script setup lang="ts">
  import { CIcon } from '@coreui/icons-vue';
  import type { VButtonProps } from '@/types/VButton';

  const props = defineProps<VButtonProps>();
  const emit = defineEmits<{
    (e: 'button-clicked'): void;
  }>();

  function handleClick() {
    if (props.disabled) return;

    emit('button-clicked');

    if (props.targetId) {
      const el = document.getElementById(props.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<template>
  <button :class="['v-button', props.variant]" @click="handleClick" :disabled="props.disabled">
    <slot>{{ props.buttonText }}</slot>
    <CIcon v-if="props.icon" :icon="props.icon" class="button-icon" />
  </button>
</template>

<style scoped>
  .v-button {
    gap: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.83rem;
    font-size: var(--font-size-sm);
    background-color: var(--color-neutral-50);
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  .v-button.primary {
    background-color: var(--color-primary);
    color: var(--color-neutral-50);
  }

  .v-button.primary:hover {
    background-color: var(--color-primary-hover);
    transform: scale(1.03);
  }

  .v-button.secondary {
    background-color: var(--color-secondary);
    color: var(--color-neutral-900);
  }

  .v-button.secondary:hover {
    background-color: var(--color-secondary-hover);
    transform: scale(1.03);
  }

  .v-button.theme {
    background-color: var(--color-bg);
    color: var(--color-theme-ligth);
    box-shadow: 0px 10px 30px -10px var(--color-box-shadow);
  }

  .v-button.theme:hover {
    transform: scale(1.1);
  }

  .button-icon {
    width: 1.2rem;
    height: 1.2rem;
  }

  .v-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    .v-button {
      width: 100%;
      font-size: 0.9rem;
    }
  }
</style>
