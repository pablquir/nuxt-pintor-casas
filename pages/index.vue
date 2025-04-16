<script setup>
import homeTexto from '~/pages/home/home_text.json'
import fadeTransition from '~/helper/transitions/fade.ts'
definePageMeta({ pageTransition: fadeTransition })
</script>

<template>
  <main>
    <HomePresentationSection :dataSection="homeTexto.sectionPresentation" />
    <HomeServicesAvailableSection :dataSection="homeTexto.sectionService" />
    <HomeHiringStepsSection :dataSection="homeTexto.sectionHiringSteps" />
    <HomeWhyChoiceSection :dataSection="homeTexto.sectionWhyChoice" />
    <HomeCommentsSection :dataSection="homeTexto.sectionComments" />
    <HomeFootSection />
  </main>
</template>
