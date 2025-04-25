<script setup>
import fadeTransition from '~/helper/transitions/fade.ts'

definePageMeta({ pageTransition: fadeTransition })
onMounted(() => {
  console.log("montado")
})
</script>

<template>
  <main class="min-h-dvh relative">
    <section class="min-h-screen bg-layout py-32">
      <div class="mx-auto container text-default flex flex-col md:flex-row gap-8">
        <div class="flex flex-col gap-4 px-4">
          <h2 class="!text-3xl font-bold">
            <span class="px-2 bg-red-500 rounded-lg">Contacts</span>
          </h2>
          <div class="grid grid-cols-3 gap-4 grid-rows-1">
            <div class="card">
              <h3>Direccion</h3>
              <p>Oficina:</p>
              <p>Avenida Bolivia Barrio Maritimo</p>
            </div>
            <div class="card">
              <h3>Telefonos</h3>
              <p>(591) 75456896</p>
              <p>(591) 78892111</p>
              <p>(591) 69878566</p>
            </div>
            <div class="card">
              <h3>Horarios</h3>
              <p>Lunes a viernes</p>
              <p>7:00 A.M - 20:00 PM</p>
              <p>Sabado</p>
              <p>7:00 A.M - 13:00 PM</p>
              <p>Domingos</p>
              <p>cerrado </p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8098.604541123403!2d-63.13568933101362!3d-17.782724023385622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e9ad03aadac7%3A0xa759109edf57faf4!2sPintura%20y%20elegancia!5e0!3m2!1ses!2sbo!4v1730343988756!5m2!1ses!2sbo"
          height="450" style="border:0;" allowfullscreen loading="lazy" class="w-full rounded-none md:rounded-xl"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </section>
  </main>
</template>
