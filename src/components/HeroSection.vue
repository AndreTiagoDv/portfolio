<script setup lang="ts">
import Image from '@/assets/Image.jpg';
import Text from './ui/VText.vue';
import Button from './ui/VButton.vue'
</script>

<template>
    <div class="container-intro">
        <div class="intro">
            <Text style="margin: 0px;" type="title">Potfólio Profissional</Text>
            <Text style="margin: 0px;" type="highlight">Criatividade que entrega resultados</Text>
            <Text style="margin: 0px;" type="description">Sou designer e desenvolvedor focado em construir experiências
                digitais modernas, acessíveis e com alta performance.</Text>
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
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
}

.intro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
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