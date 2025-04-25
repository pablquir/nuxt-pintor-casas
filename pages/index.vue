<script setup>
import homeTexto from '~/pages/home/home_text.json'
import fadeTransition from '~/helper/transitions/fade.ts'

definePageMeta({ pageTransition: fadeTransition })
</script>

<template>
  <main class="">
    <HomePresentationSection :dataSection="homeTexto.sectionPresentation" />
    <HomeServicesAvailableSection :dataSection="homeTexto.sectionService" />
    <HomeHiringStepsSection :dataSection="homeTexto.sectionHiringSteps" />
    <HomeWhyChoiceSection :dataSection="homeTexto.sectionWhyChoice" />
    <HomeCommentsSection :dataSection="homeTexto.sectionComments" />
    <SharedFootSection class="bg-layout" />
  </main>
</template>

<style scoped>
/* .home-main { */
/*   background-image: url("/img/home/mask-paint.svg"); */
/*   background-repeat: no-repeat; */
/*   background-size: cover; */
/*   background-position: center center; */
/*   background-attachment: scroll; */
/* } */
</style>
