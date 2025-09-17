<script setup lang="ts">
  import type { VSkeletonProps } from './VSkeleton.type';
  import './VskeletonStyle.scss';
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

<style scoped></style>
