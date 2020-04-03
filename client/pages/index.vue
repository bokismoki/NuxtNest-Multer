<template>
  <div class="container mx-auto p-10">
    <div class="px-3 flex flex-wrap" v-if="images.length">
      <div
        class="max-w-xs mt-5 w-full mx-auto self-center rounded overflow-hidden shadow"
        v-for="image in images"
        :key="image._id"
      >
        <ImageItem :image="image" />
      </div>
    </div>
    <p v-else class="font-semibold text-lg">
      There are no images to display -
      <nuxt-link :to="{name: 'upload'}" class="text-vgreen underline">Add One</nuxt-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Home'
  },
  components: {
    ImageItem: () =>
      import(/* webpackChunkName: 'image-item'*/ '~/components/ImageItem')
  },
  computed: {
    ...mapGetters(['images'])
  }
}
</script>

<style>
</style>
