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
    font-size: 1rem;
    background-color: #f2f5f8;
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    transition: background-color transform 0.5s ease;
}

button.primary {
    background-color: #335fdb;
    color: #f4f7fa;

}

button.primary:hover {
    background-color:  #3965dde6;
    transform: scale(1.03);
}
button:hover {
    background-color:  #f0f5f9;
    transform: scale(1.03);
}
</style>
