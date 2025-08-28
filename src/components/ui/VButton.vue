<script setup lang="ts">
  import type { VButtonProps } from '@/types/VButton';

  const props = defineProps<VButtonProps>();
  const emit = defineEmits<{
    (e: 'button-clicked'): void;
  }>();

  function handleClick() {
    emit('button-clicked');

    if (props.targetId) {
      const el = document.getElementById(props.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<template>
  <button :class="{ primary: props.isPrimary }" @click="handleClick">
    <slot>{{ props.buttonText }}</slot>
  </button>
</template>

<style scoped>
  button {
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.83rem;
    font-size: var(--font-size-xs);
    background-color: var(--color-neutral-50);
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    transition: background-color transform 1s ease;
  }

  button.primary {
    background-color: var(--color-primary);
    color: var(--color-neutral-50);
  }

  button.primary:hover {
    background-color: var(--color-primary-hover);
    transform: scale(1.03);
  }

  button:hover {
    background-color: var(--color-secondary-hover);
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    button {
      border: none;
      gap: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 0.9rem;
    }
  }
</style>
