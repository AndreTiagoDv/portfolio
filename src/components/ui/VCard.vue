<script setup lang="ts">
import type { PropType } from 'vue';
import VText from './VText.vue';
import { CIcon } from '@coreui/icons-vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null

  }
})
</script>

<template>
  <div class="card-container">
    <img v-if="image" class="img-card" :src="image" />
    <div class="container-icon">
      <CIcon  v-if="icon" class="icon-card" :name="icon" />
      <div class="card-content">
        <VText style="margin: 0px;" type="paragraph">{{ title }}</VText>
        <VText style="margin: 0px;" type="description">{{ description }}</VText>
      </div>
    </div>

  </div>
</template>


<style scoped>
.card-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(54, 254, 251, 0.501)0px 10px 30px -10px;
  transition: transform 0.5s ease;
  justify-content: center;
}


.img-card {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.5s ease;

}

.img-card:hover {
  transform: scale(1.01);
}

.icon-card {
  width: 1.3rem;
  background-color: #e8edfb;
  padding: 0.66rem;
  border-radius: 0.5rem;
  --ci-primary-color:  rgba(0, 0, 255, 0.711);
  fill: rgba(0, 0, 255, 0.711);
}

.container-icon {
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  height: 2rem;
}
</style>
