<template>
  <div class="weare">
    <app-header></app-header>
    <h1>We are Vanky</h1>
    <button @click="toggleShow()">Click me!</button>
    <div class="animation" v-bind:class="[isShowing ? setClass : '', addClass]">
      <p>{{ msg }}</p>
    </div>
    <div v-show="showFooter">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Yuki',
      isShowing: true,
      setClass: 'activate-show',
      addClass: 'showAnimation',
      showFooter: false
    }
  },
  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  },
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>

<style lang="sass" scoped>

$color-blue: blue
$color-content: black

.weare
  h1
    color: $color-content

.animation
  background-color: $color-blue
  overflow: hidden
  width: 50%
  margin: auto
  p
    color: white

button
  display: block
  background-color: $color-content
  margin: 20px auto
  transition: all 1s ease
  padding: 10px 7px
  color: white
  &:hover
    background-color: green
    color: $color-content

p
  color: $color-content
  padding: 30px 0

.showAnimation
  transition: all 0.5s ease
  height: 0

.activate-show
  height: 110px

</style>
