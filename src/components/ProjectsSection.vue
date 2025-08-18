<script setup>
import VCard from '../components/ui/VCard.vue';
import ImgMobile from "@/assets/mobile.jpg"
import ImgWeb from '@/assets/web.jpg'
import ImgDashboard from '@/assets/dashboard.jpg'
import VText from './ui/VText.vue';
const items = [
  { id: 1, name: 'Website responsivo', img: ImgWeb, description: 'UI limpa • Acessível • Responsiva' },
  { id: 2, name: 'Aplicativo mobile UI', img: ImgMobile, description: 'UI limpa • Acessível • Responsiva' },
  { id: 3, name: 'Dashboard e Analytics', img: ImgDashboard, description: 'UI limpa • Acessível • Responsiva' }
];


</script>

<template>
  <div class="section-container">
    <div class="content-text">
      <VText style="margin: 0px;" type="highlight">Projetos</VText>
      <VText style="margin: 0px;" type="title">Uma seleção de trabalhos focados em experiência, performance e
        visual minimalista.</VText>

      <ul class="horizontal-list">
        <li v-for="item in items" :key="item.id">
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

.horizontal-list li {
  margin: 0px;
  padding: 16px;
  justify-content: flex-start;

}
</style>
