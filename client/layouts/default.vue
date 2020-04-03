<template>
  <div class="flex flex-col justify-between">
    <div>
      <Navbar />
      <transition name="slide">
        <nuxt />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () =>
      import(/* webpackChunkName: 'navbar' */ '~/components/Navbar'),
    Footer: () => import(/* webpackChunkName: 'footer' */ '~/components/Footer')
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  @apply m-0 p-0;
}

body {
  @apply overflow-x-hidden;
}

body,
#__nuxt,
#__layout,
#__layout > div {
  @apply min-h-screen;
}

.slide-enter-active {
  transition: all 500ms ease;
}
.slide-leave-active {
  transition: all 800ms cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
