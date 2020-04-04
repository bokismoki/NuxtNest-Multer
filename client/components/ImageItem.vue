<template>
  <a :href="`http://localhost:8080/api/image/${image.file_path}`" rel="noopener" target="_blank">
    <img
      :src="`http://localhost:8080/api/image/${image.file_path}`"
      :alt="image.original_name"
      class="mx-auto"
    />
  </a>
</template>

<script>
export default {
  name: 'ImageItem',
  props: ['image']
}
</script>

<style scoped>
</style>