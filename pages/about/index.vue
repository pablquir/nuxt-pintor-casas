<script setup lang="ts">
import aboutTexto from "~/pages/about/about_text.json"
</script>

<template>
  <main class="bg-layout">
    <AboutPresentationSection :dataSection="aboutTexto.sectionPresentation" />
    <AboutPurpuseSection :dataSection="aboutTexto.sectionPurpose" />
    <SharedFootSection />
  </main>
</template>
