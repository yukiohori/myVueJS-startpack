<template>
  <div class="about">
    <app-header></app-header>
    <div class="row">
      <h1>This is About Page</h1>
      <button @click="toggleShow()">Click me!</button>
      <div class="animation text-center" v-bind:class="[isShowing ? setClass : '', addClass]">
        <p>{{ msg }}</p>
      </div>
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
      showFooter: true
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

$color-content: black

.about
  margin-top: 50px

.animation
  background-color: cadetblue
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
    background-color: cadetblue
    color: $color-content

p
  color: $color-content
  padding: 30px 0

.showAnimation
  transition: all 0.5s ease
  height: 0

.activate-show
  height: 130px

</style>
