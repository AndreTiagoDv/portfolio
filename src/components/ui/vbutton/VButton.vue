<script setup lang="ts">
  import { CIcon } from '@coreui/icons-vue';
  import type { VButtonProps } from '@/components/ui/vbutton/VButton.type';
  import './VbuttonStyle.scss';

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

<style scoped></style>
