<script setup>
import Image from '@/assets/images/hero.jpg';
import Text from '../ui/VText.vue';
import Button from '../ui/VButton.vue'

import { CIcon } from '@coreui/icons-vue';
import { cilArrowRight } from "@coreui/icons"

</script>

<template>
    <div class="section-container">
        <div class="section-content">
            <Text style="margin: 0px;" type="title">PORTIFÓLIO PROFISSIONAL</Text>
            <Text style="margin: 0px;" type="highlight">Criatividade que entrega resultados</Text>
            <Text style="margin: 0px;" type="title">Sou designer e desenvolvedor focado em construir experiências
                digitais modernas, acessíveis e com alta performance.</Text>
            <div class="buttons-hero">
                <div class="buttons">
                    <Button @button-clicked="handleClick" :is-primary="true" target-id="projectsSection">
                        Ver portfólio
                        <CIcon :icon="cilArrowRight" class="icon-hero" />
                    </Button>
                    <Button button-text="Fale comigo" target-id="contactSection" @button-clicked="handleClick" />
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

.icon-hero {
    max-width: 1.5rem;
    align-items: center;
}

@media (max-width: 768px)
{
Button{
    white-space: nowrap;
}

.icon-hero {
   display: none;

}

}
</style>