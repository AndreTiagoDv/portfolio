<script setup>
  import VText from '@/components/ui/vtext/VText.vue';
  import VCard from '@/components/ui/vcard/VCard.vue';

  import {
    cibTypescript,
    cibHtml5,
    cibReact,
    cibJavascript,
    cilPaintBucket,
    cibVueJs,
  } from '@coreui/icons';

  const items = [
    { id: 1, name: 'TypeScript', iconName: cibTypescript, alt: 'TypeScript' },
    { id: 2, name: 'HTML & CSS', iconName: cibHtml5, alt: 'HTML e CSS' },
    { id: 3, name: 'React', iconName: cibReact, alt: 'React' },
    { id: 4, name: 'JavaScript', iconName: cibJavascript, alt: 'JavaScript' },
    { id: 5, name: 'UI/UX', iconName: cilPaintBucket, alt: 'UI e UX' },
    { id: 6, name: 'VueJs', iconName: cibVueJs, alt: 'VueJs' },
  ];
</script>

<template>
  <section class="section-container" id="SectionSkills" aria-labelledby="skill-title">
    <div class="content-text">
      <VText id="skill-title" type="title"> Tecnologias</VText>
      <VText type="highlight">Habilidades</VText>
      <VText type="paragraph"
        >Ferramentas e stacks que uso para criar produtos digitais modernos.
      </VText>
    </div>
    <ul class="container-card">
      <li v-for="item in items" :key="item.id" class="content-card">
        <article>
          <VCard :title="item.name" :icon="item.iconName" :alt="item.alt" />
        </article>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .section-container {
    display: table-row;
  }
  .container-card {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.2rem;
    list-style: none;
    padding: 1rem;
  }

  .content-card {
    transition: transform 0.3s ease;
  }

  .content-card:hover {
    transform: scale(1.05);
  }

  @media (min-width: $breakpoint-md) {
    .container-card {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.2rem;
      list-style: none;
      padding: 1rem;
    }
  }
</style>
