<template>
  <div class="upload pb-10">
    <UploadForm />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Upload'
  },
  components: {
    UploadForm: () =>
      import(/* webpackChunkName: 'upload-form' */ '~/components/UploadForm')
  }
}
</script>

<style scoped>
</style>