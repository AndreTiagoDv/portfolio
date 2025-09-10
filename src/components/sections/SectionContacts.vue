<script setup>
  import VText from '@/components/ui/vtext/VText.vue';
  import VForm from '@/components/ui/vform/VForm.vue';
  import VButtonIcon from '@/components/ui/vbuttonIcon/VButtonIcon.vue';

  import { cibGithub, cibLinkedin } from '@coreui/icons';

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
  <div id="contactSection" class="section-container">
    <div class="section-content">
      <VText type="title" style="margin: 0">VAMOS CONVERSAR</VText>
      <VText type="highlight" style="margin: 0">Contato</VText>
      <VText type="paragraph" style="margin: 0">
        Preencha o formulário e retornarei o mais breve possível.
      </VText>

      <div class="contact-grid">
        <div class="form-container">
          <VForm />
        </div>
        <div class="container-card">
          <VText type="title">Redes Sociais</VText>
          <ul class="content-card" style="margin: 0px; padding: 0px">
            <li v-for="item in items" :key="item.id" class="content-button">
              <VButtonIcon
                :key="item.id"
                class="button"
                :tooltip="item.information"
                :icon="item.icon"
                :url="item.url"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-grid {
    display: flex;
    gap: 4rem;
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
</style>
