<template>
    <button @click="handleClick" :class="{ 'primary': isPrimary }">
        {{ buttonText }}
    </button>
</template>

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

    },
    methods: {
        handleClick() {
            this.$emit('button-clicked');
        }
    }
}
</script>

<style scoped>
button {
    padding: 0.83rem;
    background-color: #f4f7fa;
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    transition: background-color transform 0.5s ease;
}

button.primary {
    background-color: #335fdb;
    color: #f4f7fa;
    font-size: medium;
}

button:hover {
    background-color: white;
    transform: scale(1.03);
    color: black;
}
</style>
