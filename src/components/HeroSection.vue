<script setup lang="ts">
import Image from '@/assets/hero.jpg';
import Text from './ui/VText.vue';
import Button from './ui/VButton.vue'
</script>

<template>
    <div class="section-container">
        <div class="section-content">
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
        <div class="section-img-container">
            <img class="section-img-content" :src="Image" alt="Descrição da imagem">
        </div>
    </div>
</template>

<style scoped>

.buttons {
    flex: 1;
    flex-direction: row;
    display: flex;
    gap: 0.70rem;
}
</style>