<script lang="ts" setup>
  import { defineAsyncComponent } from 'vue';
  import SectionHero from '@/components/sections/SectionHero.vue';
  import SectionAboutMe from '@/components/sections/SectionAboutMe.vue';
  const SectionProjects = defineAsyncComponent(
    () => import('@/components/sections/SectionProjects.vue' /* webpackPrefetch: true */),
  );
  const SectionSkills = defineAsyncComponent(
    () => import('@/components/sections/SectionSkills.vue'),
  );

  const SectionContacts = defineAsyncComponent(
    () => import('@/components/sections/SectionContacts.vue'),
  );
</script>

<template>
  <SectionHero />
  <SectionAboutMe />
  <Suspense>
    <SectionProjects />
  </Suspense>
  <Suspense>
    <SectionSkills />
  </Suspense>
  <Suspense>
    <SectionContacts />
  </Suspense>
</template>
