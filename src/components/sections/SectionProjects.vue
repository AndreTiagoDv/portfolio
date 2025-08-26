<script setup>
import VCard from '../ui/VCard.vue';
import VText from '../ui/VText.vue';

import ImgMobile from "@/assets/images/mobile.jpg"
import ImgWeb from '@/assets/images/web.jpg'
import ImgDashboard from '@/assets/images/dashboard.jpg'

const items = [
  { id: 1, name: 'Website responsivo', img: ImgWeb, description: 'UI limpa • Acessível • Responsiva' },
  { id: 2, name: 'Aplicativo mobile UI', img: ImgMobile, description: 'UI limpa • Acessível • Responsiva' },
  { id: 3, name: 'Dashboard e Analytics', img: ImgDashboard, description: 'UI limpa • Acessível • Responsiva' }
];


</script>

<template>
  <div class="section-container" id="projectsSection">
    <div class="content-text">
      <VText type="highlight">Projetos</VText>
      <VText type="title">Uma seleção de trabalhos focados em experiência, performance e
        visual minimalista.</VText>

      <ul class="horizontal-list">
        <li class="content-card" v-for="item in items" :key="item.id">
          <VCard :title="item.name" :description="item.description" :image="item.img" />
        </li>
      </ul>

    </div>
  </div>
</template>

<style scoped>
.horizontal-list {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.content-card {
  margin: 0px;
  padding: 16px;
  justify-content: flex-start;

}

.content-card {
  transition: transform 0.3s ease;
}

.content-card:hover {
  transform: scale(1.05);
}

@media (max-width:768px) {
  .horizontal-list {
    flex-direction: column;
    padding: 1rem;
    max-width: 20rem;
  }
}
</style>
