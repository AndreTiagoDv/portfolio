<script setup>
  import VText from '@/components/ui/vtext/VText.vue';
  import VForm from '@/components/ui/vform/VForm.vue';
  import { cibGithub, cibLinkedin } from '@coreui/icons';
  import VSocialMedia from '@/components/ui/vsocialmedia/VSocialMedia.vue';

  const items = [
    { id: 1, information: 'Github', icon: cibGithub, url: 'https://github.com/AndreTiagoDv' },
    {
      id: 2,
      information: 'Linkedin',
      icon: cibLinkedin,
      url: 'https://www.linkedin.com/in/andre-tiago-80773a298/',
    },
  ];
</script>

<template>
  <section id="SectionContacts" class="section-container" aria-labelledby="contact-title">
    <div class="section-content">
      <VText id="contact-title" type="title" style="margin: 0">VAMOS CONVERSAR</VText>
      <VText type="highlight" style="margin: 0">Contato</VText>
      <VText type="paragraph" style="margin: 0">
        Preencha o formulário e retornarei o mais breve possível.
      </VText>

      <div class="contact-grid">
        <div class="form-container">
          <VForm aria-label="Formulario de contato" />
        </div>
        <div class="container-card" aria-labelledby="social-title">
          <VText id="social-title" type="title">Redes Sociais</VText>
          <ul class="content-card" style="margin: 0px; padding: 0px" role="list">
            <li v-for="item in items" :key="item.id" class="content-button">
              <VSocialMedia
                :key="item.id"
                class="button"
                :tooltip="item.information"
                :icon="item.icon"
                :url="item.url"
                :aria-label="`Acesse meu ${item.information}`"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .contact-grid {
    width: 100%;
  }

  .form-container {
    flex: 1;
    padding: 1rem;
  }

  .container-card {
    flex: 1;
    padding: 1rem;
    box-shadow: 0px 10px 30px -10px var(--color-box-shadow);
    border-radius: 1rem;
    flex-direction: column;
    justify-content: center;
    display: flex;
    justify-content: flex-start;
    height: 20%;
    margin: 1rem 0;
    gap: 1.5rem;
  }

  .content-card {
    gap: 1rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: left;
    flex-direction: column;
    padding: 1rem;
    margin-top: 0px;
  }

  @media (min-width: $breakpoint-md) {
    .contact-grid {
      display: flex;
      gap: 2rem;
      align-items: flex-start;
    }

    .container-card {
      height: auto;
      margin-top: 0;
    }
  }
</style>
