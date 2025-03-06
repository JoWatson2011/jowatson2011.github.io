<script>
export default {
  props: {
    routeTo: String,
    label: String | null
  },
  data() {
    return {
      navStyle: '',
      iconStyle: '',
      path: `/${this.routeTo}`,
      buttonLabel:
        this.label || `${this.routeTo.slice(0, 1).toUpperCase()}${this.routeTo.slice(1)}`,
      dataCy: `${this.routeTo}-link`
    }
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
  }
}
</script>

<template>
  <RouterLink
    :to="path"
    class="hover:text-light-darkBlue text-lg justify-self-center"
    activeClass="text-black font-semibold"
    :data-cy="dataCy"
  >
    <button
      class="bg-white rounded-full px-2 shadow-nav-button m-2 ease-out hover:shadow-nav-button-hover hover:-translate-y-px hover:translate-x-px transition-all"
    >
      <v-icon name="bi-archive-fill" scale="1.25" :class="iconStyle" />
      {{ buttonLabel }}
    </button>
  </RouterLink>
</template>
