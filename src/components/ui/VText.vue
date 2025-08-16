<template>
  <component :is="tag" :class="['texto', type]">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export default {
  props: {
    type: {
      type: String as PropType<'highlight'|'title'|'paragraph'|'description'>,
      default: 'paragraph',
      validator: function (value:string) {
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

<style  scoped>


.title {
  font-size: 1.5rem; 
  font-weight: lighter;
  color: rgba(115, 115, 115, 0.863);
  font-family: sans-serif;
}

.highlight {
  font-size: 3.75rem;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}

.paragraph {
  font-size: 1.5rem;
}

.description {
  font-size: 1.25rem; 
  font-weight: lighter;
  color: rgba(115, 115, 115, 0.863);
}
</style>