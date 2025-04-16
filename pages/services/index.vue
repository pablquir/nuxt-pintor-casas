<script setup lang="ts">
import servicesTexto from "~/pages/services/service_text.json"
import fadeTransition from '~/helper/transitions/fade.ts'

definePageMeta({ pageTransition: fadeTransition })
</script>

<template>
  <main>
    <ServicesPresentationSection :dataSection="servicesTexto.sectionPresentation" />
    <ServicesTabSection :dataSection="servicesTexto.services" />
    <SharedFootSection class="bg-red-500 dark" />
  </main>
</template>
