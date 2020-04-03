<template>
  <div class="error bg-vblue">
    <Navbar />
    <div class="absolute w-full flex flex-col">
      <h1
        class="px-5 text-center text-white font-semibold text-xl sm:text-3xl"
      >Error, could not find what you are looking for!</h1>
      <nuxt-link
        :to="{name: 'index'}"
        class="bg-vgreen font-semibold text-white border-2 border-vgreen text-sm uppercase rounded p-3 mt-5 inline-block shadow mx-auto hover:border-white transition-colors duration-300"
      >Go Back Home</nuxt-link>
    </div>
  </div>
</template>


<script>
export default {
  head: {
    title: 'Error Page'
  },
  components: {
    Navbar: () => import(/* webpackChunkName: 'navbar' */ '~/components/Navbar')
  }
}
</script>

<style scoped>
.error > div {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>