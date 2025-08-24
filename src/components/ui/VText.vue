<script lang="ts">
import type { PropType } from 'vue';

export default {
  props: {
    type: {
      type: String as PropType<'highlight' | 'title' | 'paragraph' | 'description'>,
      default: 'paragraph',
      validator: function (value: string) {
        return ['highlight', 'title', 'paragraph', 'description'].includes(value)
      }
    }
  },
  computed: {
    tag() {
      switch (this.type) {
        case 'highlight':
          return 'h1';
        case 'title':
          return 'h2';
        case 'paragraph':
          return 'p';
        case 'description':
          return 'h4';
        default:
          return 'p';
      }
    }
  }
}
</script>
<template>
  <component :is="tag" :class="['texto', type]">
    <slot></slot>
  </component>
</template>


<style></style>