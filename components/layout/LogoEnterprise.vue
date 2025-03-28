<template>
  <NuxtLink to="/" class="logo-enterprise-container">
    <div class="icons">
      <Icon name="icon:paint-roller-solid" style="" />
      <Icon name="icon:bucket-solid" class="" />
    </div>
    <span class="col-span-2 text-lg font-bold"> Alcides & Asociados </span>
  </NuxtLink>
</template>

<style scoped>
.logo-enterprise-container {
  @apply no-underline;
  @apply flex flex-col justify-center items-center px-2;
}

.icons {
  @apply flex gap-1 p-2 fill-slate-100;
  @apply fill-slate-900 dark:fill-slate-100;
}

span {
  @apply text-red-500 font-bold;
}
</style>
