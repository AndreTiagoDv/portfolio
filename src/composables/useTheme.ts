import { ref, watch } from 'vue';

export function useTheme() {
  // Tema atual
  const theme = ref<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  );

  // Função para alternar tema
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  // Observa mudanças e aplica no HTML + localStorage
  watch(
    theme,
    (newTheme) => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    },
    { immediate: true },
  );

  return { theme, toggleTheme };
}
