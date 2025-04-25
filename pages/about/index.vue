<script setup lang="ts">
import aboutTexto from "~/pages/about/about_text.json"
import fadeTransition from '~/helper/transitions/fade.ts'

definePageMeta({ pageTransition: fadeTransition })
</script>

<template>
  <main class="">
    <AboutPresentationSection :dataSection="aboutTexto.sectionPresentation" />
    <AboutPurpuseSection :dataSection="aboutTexto.sectionPurpose" />
    <SharedFootSection class="bg-layout" />
  </main>
</template>
