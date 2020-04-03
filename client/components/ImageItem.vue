<template>
  <div>
    <img
      :src="`http://localhost:8080/api/image/${image.file_path}`"
      :alt="image.original_name"
      class="mx-auto"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: ['image']
}
</script>

<style scoped>
</style>