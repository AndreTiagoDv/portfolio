<script setup>
  import VCard from '@/components/ui/vcard/VCard.vue';
  import VText from '@/components/ui/vtext/VText.vue';

  import ImgMobile from '@/assets/images/mobile.jpg';
  import ImgWeb from '@/assets/images/web.jpg';
  import ImgDashboard from '@/assets/images/dashboard.jpg';

  const items = [
    {
      id: 1,
      name: 'Website responsivo',
      img: ImgWeb,
      description: 'UI limpa • Acessível • Responsiva',
    },
    {
      id: 2,
      name: 'Aplicativo mobile UI',
      img: ImgMobile,
      description: 'UI limpa • Acessível • Responsiva',
    },
    {
      id: 3,
      name: 'Dashboard e Analytics',
      img: ImgDashboard,
      description: 'UI limpa • Acessível • Responsiva',
    },
  ];
</script>

<template>
  <div id="projectsSection" class="section-container">
    <div class="content-text">
      <VText type="highlight">Projetos</VText>
      <VText type="paragraph"
        >Uma seleção de trabalhos focados em experiência, performance e visual minimalista.</VText
      >

      <ul class="horizontal-list">
        <li v-for="item in items" :key="item.id" class="content-card">
          <VCard :title="item.name" :description="item.description" :image="item.img" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .horizontal-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: auto;
    padding: 0;
  }

  .content-card {
    margin: 0px;
    padding: 16px;
    justify-content: flex-start;
    transition: transform 0.3s ease;
    max-width: 15rem;
  }

  .content-card:hover {
    transform: scale(1.05);
  }

  @media (min-width: $breakpoint-md) {
    .horizontal-list {
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: center;
    }
  }
</style>
