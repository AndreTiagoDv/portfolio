<script setup>
  import VText from '@/components/ui/vtext/VText.vue';
</script>

<template>
  <section class="container-footer" id="SectionFooter" aria-labelledby="footer-title">
    <VText id="foote-title" type="description">
      &copy; 2025 Andre Tiago — Todos os direitos reservados
    </VText>
  </section>
</template>

<style>
  .container-footer {
    --color-bg: var(--color-neutral-500);
    width: 100%;
    display: flex;
    justify-content: center;
    height: 5rem;
  }
</style>
