import { ref, onMounted, onUnmounted } from 'vue';

export function useIntersectionObserve(targetId: string, rootMargin = '200px') {
  const isVisble = ref(false);

  onMounted(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisble.value = true;
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
  });
  onUnmounted(() => {
    isVisble.value = false;
  });
  return { isVisble };
}
