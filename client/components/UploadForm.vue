<template>
  <div
    class="upload-form px-5 transition-all duration-500"
    :class="{'mt-10': imageRendered, 'mt-40': !imageRendered}"
  >
    <form @submit.prevent>
      <input class="hidden" type="file" :disabled="imageRendered" id="file" @change="processFile" />
      <h1
        class="text-center text-lg text-vgreen font-semibold uppercase lg:text-xl"
      >Upload any image</h1>
      <label
        class="bg-vblue relative block w-full max-w-lg mx-auto text-white border-2 border-vblue rounded-xl mt-5 p-5 cursor-pointer shadow transition-colors duration-300 group hover:border-vgreen lg:p-8"
        for="file"
        ref="dropZone"
      >
        <div class="text-center" v-if="!imageRendered">
          <span
            class="opacity-75 transition-opacity duration-300 group-hover:opacity-100 lg:text-lg"
          >Drag & Drop your file or</span>
          <span
            class="underline opacity-75 transition-opacity duration-300 group-hover:opacity-100 lg:text-lg"
          >Browse</span>
        </div>
        <div
          v-else
          class="flex justify-between rounded-xl p-2"
          :class="{'bg-vgreen': uploadCompleted}"
        >
          <div>
            <p>{{truncatedImageName}}</p>
            <p>{{image.size}} Mb</p>
          </div>
          <div class="relative ml-5">
            <button
              class="absolute right-0 rounded-full text-xs font-semibold h-full px-1 bg-vgreen"
              @click="upload"
              v-if="!image.uploadProcessOn"
            >Upload</button>
            <p
              v-else
              class="text-right"
            >{{uploadCompleted ? `Upload completed-${image.upload}%` : `Uploading-${image.upload}%` }}</p>
          </div>
          <button
            class="absolute top-0 right-0 px-2 mt-1 font-black lg:text-lg"
            @click="removeImage"
          >X</button>
        </div>
      </label>
    </form>
    <div
      class="opacity-0 mt-5 max-w-sm mx-auto transition-opacity duration-500"
      :class="{'opacity-100': imageRendered}"
    >
      <img :src="image.src" class="max-w-full rounded-xl mx-auto" ref="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadForm',
  data() {
    return {
      image: {
        src: '',
        name: '',
        size: '',
        uploadProcessOn: false,
        upload: 0,
        file: null
      }
    }
  },
  methods: {
    processFile(e) {
      this.setImageFile(e.target.files[0])
      const file = e.target.files[0]
      this.fileRead(file)
    },
    fileRead(file) {
      const reader = new FileReader()

      reader.addEventListener('load', () => {
        this.image.src = reader.result
      })

      if (file.type.includes('image')) {
        reader.readAsDataURL(file)
        this.image.name = file.name
        this.image.size = this.convertSizeToMb(file.size)
      } else {
        this.image.src = ''
      }
    },
    setImageFile(file) {
      this.image.file = file
    },
    convertSizeToMb(size) {
      return (size / (1024 * 1024)).toFixed(2)
    },
    removeImage() {
      this.image.src = ''
      this.image.name = ''
      this.image.size = ''
      this.image.uploadProcessOn = false
      this.image.upload = 0
      this.image.file = null
    },
    upload() {
      const fd = new FormData()
      fd.append('image', this.image.file, this.image.file.name)
      this.$axios
        .post(
          '/image',
          fd,
          {
            onUploadProgress: uploadEvent => {
              this.image.uploadProcessOn = true
              this.image.upload =
                Math.round(uploadEvent.loaded / uploadEvent.total) * 100
            }
          },
          {
            headers: {
              'content-type': 'multipart/form-data'
            }
          }
        )
        .then(async response => {
          const { status, data } = response
          if (status === 201) {
            this.$store.dispatch('addImage', data)
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    handleDragOver(e) {
      e.stopPropagation()
      e.preventDefault()
    },
    handleFileSelect(e) {
      e.stopPropagation()
      e.preventDefault()

      const files = e.dataTransfer.files
      this.setImageFile(files[0])
      const file = files[0]
      this.fileRead(file)
    }
  },
  computed: {
    imageRendered() {
      return !!this.image.src
    },
    truncatedImageName() {
      return this.image.name.length > 25
        ? this.image.name.slice(0, 25) + '...'
        : this.image.name
    },
    uploadCompleted() {
      return this.image.upload === 100
    }
  },
  mounted() {
    const dropZone = this.$refs.dropZone
    dropZone.addEventListener('dragover', this.handleDragOver, false)
    dropZone.addEventListener('drop', this.handleFileSelect, false)
  },
  beforeDestroy() {
    const dropZone = this.$refs.dropZone
    dropZone.removeEventListener('dragover', this.handleDragOver, false)
    dropZone.removeEventListener('drop', this.handleFileSelect, false)
  }
}
</script>

<style scoped>
</style>