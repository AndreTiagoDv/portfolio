<script setup lang="ts">
  import { ref, watch, onUnmounted, type PropType } from 'vue';
  import { cilMenu } from '@coreui/icons';
  import VButton from '../vbutton/VButton.vue';
  import '@/components/ui/vmenu/vmenu.style.scss';
  interface MenuItem {
    id: number | string;
    name: string;
    targetId: string;
  }

  const props = defineProps({
    items: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
  });
  const isMenuOpen = ref(false);
  const menuComponentRef = ref<HTMLElement | null>(null);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
  function handleItemClick() {
    isMenuOpen.value = false;
  }
  const handleClickOutside = (e: MouseEvent) => {
    if (menuComponentRef.value && !menuComponentRef.value.contains(e.target as Node)) {
      isMenuOpen.value = false;
    }
  };

  watch(isMenuOpen, (isOpen) => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<template>
  <div ref="menuComponentRef" class="menu-component">
    <VButton :icon="cilMenu" class="hamburger-button" @button-clicked="toggleMenu" />
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="menu-container">
        <ul>
          <li v-for="item in props.items" :key="item.id">
            <VButton
              class="list-button"
              :button-text="item.name"
              :target-id="item.targetId"
              @button-clicked="handleItemClick"
              aria-label="Abrir menu de navegação"
              :aria-expanded="isMenuOpen"
              aria-controls="main-menu"
            />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped></style>
