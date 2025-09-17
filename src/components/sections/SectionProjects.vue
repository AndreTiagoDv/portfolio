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
      description: '• Sites modernos que se adaptam a desktops, tablets e celulares.',
      alt: 'Captura de tela de um website exibido em diferentes tamanhos de tela',
    },
    {
      id: 2,
      name: 'Aplicativo mobile UI',
      img: ImgMobile,
      description: '• Aplicativos com design intuitivo e foco em experiência do usuário.',
      alt: 'Interface de um aplicativo mobile com botões grandes e navegação clara',
    },
    {
      id: 3,
      name: 'Dashboard e Analytics',
      img: ImgDashboard,
      description: '• Painel com gráficos interativos para análise de dados em tempo real.',
      alt: 'Dashboard exibindo gráficos de barras e linhas com dados analíticos',
    },
  ];
</script>

<template>
  <section id="SectionProjects" class="section-container" aria-labelledby="projects-title">
    <div class="content-text">
      <VText id="projects-title" type="highlight">Projetos</VText>
      <VText type="paragraph"
        >Uma seleção de trabalhos focados em experiência, performance e visual minimalista.</VText
      >

      <ul class="horizontal-list">
        <li v-for="item in items" :key="item.id" class="content-card">
          <article>
            <VCard
              :title="item.name"
              :description="item.description"
              :image="item.img"
              :alt="item.alt"
            />
          </article>
        </li>
      </ul>
    </div>
  </section>
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
