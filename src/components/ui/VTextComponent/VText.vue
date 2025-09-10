<script setup lang="ts">
  import { computed } from 'vue';
  import type { VTextProps, TextType } from '@/types/VText';
  import '@/components/ui/VTextComponent/VTextStyle.scss';

  const props = defineProps<VTextProps>();
  const tagmap: Record<TextType, string> = {
    highlight: 'h1',
    title: 'h2',
    description: 'h4',
    paragraph: 'p',
  };

  const tag = computed(() => tagmap[props.type ?? 'paragraph']);
  const className = computed(() => props.type ?? 'paragraph'); //classe valida mesmo sem type
</script>

<template>
  <component :is="tag" :class="['texto', className, props.class]" v-bind="props">
    <slot></slot>
  </component>
</template>

<style>
  .texto {
    margin: 0;
  }
</style>
