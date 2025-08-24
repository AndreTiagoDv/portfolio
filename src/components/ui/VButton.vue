<script lang="ts">

export default {
    props: {
        buttonText: {
            type: String,
            default: " "
        },
        isPrimary: {
            type: Boolean,
            default: false
        },
        targetId: {
            type: String,
            default: null
        }
    },
    methods: {
        handleClick() {
            this.$emit('button-clicked');

            if (this.targetId) {
                const el = document.getElementById(this.targetId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

}
</script>




<template>
    <button @click="handleClick" :class="{ 'primary': isPrimary }">
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
    font-size: 1rem;
    background-color: #f2f5f8;
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    transition: background-color transform 1.s ease;
}

button.primary {
    background-color: #335fdb;
    color: #f4f7fa;

}

button.primary:hover {
    background-color: #3965ddd0;
    transform: scale(1.03);
}

button:hover {
    background-color: #b4d8ed94;
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
