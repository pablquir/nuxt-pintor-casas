<script setup>
import homeTexto from '~/pages/home/home_text.json'
</script>

<template>
  <main class="bg-layout">
    <HomePresentationSection :dataSection="homeTexto.sectionPresentation" />
    <HomeServicesAvailableSection :dataSection="homeTexto.sectionService" />
    <HomeHiringStepsSection :dataSection="homeTexto.sectionHiringSteps" />
    <HomeWhyChoiceSection :dataSection="homeTexto.sectionWhyChoice" />
    <HomeCommentsSection :dataSection="homeTexto.sectionComments" />
    <HomeFootSection />
  </main>
</template>
