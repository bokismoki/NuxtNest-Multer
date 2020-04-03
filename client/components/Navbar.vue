<template>
  <nav class="navbar bg-vgreen text-white shadow-lg px-3 py-6 lg:px-10 lg:py-8">
    <div class="container mx-auto flex justify-between items-center">
      <ul class="flex items-center">
        <li>
          <nuxt-link class="text-xl uppercase font-semibold px-2 py-1" :to="{name: 'index'}">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link
            class="text-xl uppercase font-semibold ml-2 px-2 py-1 lg:ml-5"
            :to="{name: 'upload'}"
          >Upload</nuxt-link>
        </li>
      </ul>
      <div class="flex items-center">
        <h1 class="hidden text-xl font-black uppercase tracking-wider sm:block">NuxtNest</h1>
        <img class="w-16 h-16 mx-2 lg:w-20 lg:h-20" src="~/assets/img/logo.svg" alt="Logo" />
        <h1 class="hidden text-xl font-black uppercase tracking-wider sm:block">Multer</h1>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-vblue;
}
</style>