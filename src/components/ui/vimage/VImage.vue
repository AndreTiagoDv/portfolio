<script setup lang="ts">
  import { ref } from 'vue';
  import type { VImageProps } from './VImage.type';
  import VSkeleton from '../vskeleton/VSkeleton.vue';

  const props = defineProps<VImageProps>();
  const loaded = ref(false);

  const sources = [
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
  ];

  const fallback = new URL(`/src/assets/images/${props.name}.jpg`, import.meta.url).href;
</script>

<template>
  <div class="vimage-container">
    <!-- Skeleton sobre a imagem até carregar -->
    <VSkeleton v-show="!loaded" class="vimage-skeleton" />

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
        class="vimage"
        :class="{ loaded }"
        @load="loaded = true"
      />
    </picture>
  </div>
</template>

<style scoped>
  .vimage-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0px 10px 30px -10px var(--color-box-shadow);
    transition: transform 0.5s ease;
  }

  .vimage-container:hover {
    transform: scale(1.025);
  }

  .vimage-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: 2;
  }

  .vimage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    position: relative;
    z-index: 1;
  }

  .vimage.loaded {
    opacity: 1;
  }
</style>
