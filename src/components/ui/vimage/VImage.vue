<script setup lang="ts">
  import { computed } from 'vue';
  import type { VImageProps } from './VImage.type';
  const props = defineProps<VImageProps>();

  const sources = computed(() => [
    {
      srcset: new URL(`/src/assets/images/${props.name}-400w.webp`, import.meta.url).href,
      media: '(max-width: 600px)',
      type: 'image/webp',
    },
    {
      srcset: new URL(`/src/assets/images/${props.name}-800w.webp`, import.meta.url).href,
      media: '(max-width: 1024px)',
      type: 'image/webp',
    },
    {
      srcset: new URL(`/src/assets/images/${props.name}-1200w.webp`, import.meta.url).href,
      media: '(min-width: 1025px)',
      type: 'image/webp',
    },
  ]);

  // fallback padrão em jpg
  const fallback = computed(
    () => new URL(`/src/assets/images/${props.name}.jpg`, import.meta.url).href,
  );
</script>

<template>
  <picture>
    <source
      v-for="(source, index) in sources"
      :key="index"
      :srcset="source.srcset"
      :media="source.media"
      :type="source.type"
    />
    <img
      :src="fallback"
      :alt="props.alt"
      :class="props.className"
      loading="lazy"
      decoding="async"
    />
  </picture>
</template>
