<script setup lang="ts">
import Image from '@/assets/Image.jpg';
import Test from './ui/VText.vue';
import Button from './ui/VButton.vue'
</script>

<template>
    <div class="container-intro">
        <div class="intro">
            <Test type="title">potfólio Profissional</Test>
            <Test type="highlight">Meu futuro em código</Test>
            <Test type="description"> Sou desenvolvedor apaixonado por tecnologia, focado em construir aplicações
                modernas e funcionais,
                aprendendo
                e aperfeiçoando minhas habilidades a cada projeto.</Test>
            <div class="buttons-hero">
                <div class="buttons">
                    <Button @button-clicked="console.log('butao clicavel')" :is-primary="true"
                        button-text="Ver portfólio" />
                    <Button button-text="Fale comigo" />
                </div>
            </div>
        </div>
        <div class="img-intro">
            <img :src="Image" alt="Descrição da imagem">
        </div>
    </div>
</template>

<style scoped>
div.container-intro {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
}

.intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;

}

.img-intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 20px;
    box-sizing: border-box;
    text-align: right;
}

.img-intro img {
    margin-top: 8rem;
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

.buttons {
    flex: 1;
    flex-direction: row;
    display: flex;
    gap: 0.70rem;
}
</style>