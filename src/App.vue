<script setup>
import HeroSection from './components/HeroSection.vue';
import AboutMeSection from './components/AboutMeSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import footerSection from "./components/FooterSection.vue";

</script>


<template>

  <HeroSection />
  <AboutMeSection />
  <ProjectsSection />
  <SkillsSection />
  <ContactSection />
  <footerSection />


</template>


<style scoped>
.main-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
}
</style>
