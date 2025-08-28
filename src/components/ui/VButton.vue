<script lang="ts">
  export default {
    props: {
      buttonText: {
        type: String,
        default: ' ',
      },
      isPrimary: {
        type: Boolean,
        default: false,
      },
      targetId: {
        type: String,
        default: null,
      },
    },
    emits: ['button-clicked'],
    methods: {
      handleClick() {
        this.$emit('button-clicked');

        if (this.targetId) {
          const el = document.getElementById(this.targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  };
</script>

<template>
  <button :class="{ primary: isPrimary }" @click="handleClick">
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<style scoped>
  button {
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.83rem;
    font-size:var(--font-size-xs);
    background-color: var(--color-neutral-50);
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    transition: background-color transform 1s ease;
  }

  button.primary {
    background-color: var(--color-primary);
    color: var(--color-neutral-50);
  }

  button.primary:hover {
    background-color: var(--color-primary-hover);
    transform: scale(1.03);
  }

  button:hover {
    background-color: var(--color-secondary-hover);
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    button {
      border: none;
      gap: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 0.9rem;
    }
  }
</style>
