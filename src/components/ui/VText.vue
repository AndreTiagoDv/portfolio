<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { VTextProps, TextType } from '@/types/VText';

const props = defineProps<VTextProps>();



const tag = computed(() => {
  switch (props.type) {
    case 'highlight': return 'h1';
    case 'title': return 'h2';
    case 'description': return 'h4';
    default: return 'p';
  }
});
</script>

<template>
  <component :is="tag" :class="['texto', type]">
    <slot></slot>
  </component>
</template>


<style>
.texto{
  margin: 0;
}
</style>