<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import { CIcon } from '@coreui/icons-vue';
  import type { VButtonIconProps } from '@/types/VButtonIcon';
  import './vbuttonStyle.scss';

  const props = defineProps<VButtonIconProps>();

  const emit = defineEmits<{
    (e: 'button-clicked'): void;
  }>();

  function handleClick() {
    if (props.url) {
      window.open(props.url, '_blank');
    } else {
      emit('button-clicked');
    }
  }
</script>

<template>
  <div class="tooltip-wrapper" @click="handleClick">
    <CIcon v-if="icon" class="icon-card" :icon="icon" />
    <span v-if="tooltip" class="tooltip-text">{{ tooltip }}</span>
  </div>
</template>

<style scoped></style>
