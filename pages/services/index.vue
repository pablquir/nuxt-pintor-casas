<script setup lang="ts">
import servicesTexto from "~/pages/services/service_text.json"
</script>

<template>
  <main class="bg-layout">
    <ServicesPresentationSection :dataSection="servicesTexto.sectionPresentation" />
    <ServicesTabSection :dataSection="servicesTexto.services" />
    <SharedFootSection class="bg-red-500 dark" />
  </main>
</template>
