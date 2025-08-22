<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { CIcon } from '@coreui/icons-vue';
const props = defineProps({
  tooltip: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: null

  }
});

const emit = defineEmits(['button-clicked']);

function handleClick() {
   if (props.url) {
     window.open(props.url, "_blank");
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

<style scoped>
.icon-card {
  width: 1.5rem;
  background-color: #e8edfb;
  fill: blue;
  color:blue;
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  transition: transform 0.5s ease;
}
.icon-card:hover{
    transform: scale(1.1)
}


.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  background-color: #333;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tooltip-wrapper:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
