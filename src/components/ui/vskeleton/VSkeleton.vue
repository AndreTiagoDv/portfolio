<script setup lang="ts">
  import type { VSkeletonProps } from './VSkeleton.type';

  const props = defineProps<VSkeletonProps>();
</script>

<template>
  <div
    class="skeleton"
    :style="{
      width: props.width
        ? typeof props.width === 'number'
          ? props.width + 'px'
          : props.width
        : '100%',
      height: props.height
        ? typeof props.height === 'number'
          ? props.height + 'px'
          : props.height
        : '200px',
      borderRadius: props.circle ? '50%' : props.rounded ? props.rounded : '1rem',
    }"
  ></div>
</template>

<style scoped>
  .skeleton {
    background-color: var(--color-neutral-200);
    position: relative;
    overflow: hidden;
  }

  /* Shimmer animation */
  .skeleton::after {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 150%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      left: -150%;
    }
    100% {
      left: 100%;
    }
  }
</style>
