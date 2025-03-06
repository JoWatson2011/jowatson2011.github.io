<script setup>
import { BiArchiveFill, IoDocumentText, BiEnvelopeOpenFill } from 'oh-vue-icons/icons'
import NavButton from './NavButton.vue'
</script>

<script>
export default {
  inject: ['windowSize'],
  data() {
    return { navStyle: '', iconStyle: '' }
  },
  mounted() {
    this.setStyle()
  },
  methods: {
    setStyle() {
      this.navStyle =
        this.windowSize === 'large'
          ? 'grid grid-cols-1 mx-auto'
          : 'flex justify-around translate-y-3'

      this.iconStyle = this.windowSize === 'large' ? 'mr-3' : ''
    }
  },
  watch: {
    windowSize(size) {
      this.setStyle()
    }
  }
}
</script>

<template>
  <nav :class="navStyle" data-cy="nav-list">
    <NavButton routeTo="projects" />
    <NavButton routeTo="experience" />
    <NavButton routeTo="contact" />
  </nav>
</template>
