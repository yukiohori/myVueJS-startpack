<template>
  <div class="weare">
    <h1>We are Vanky</h1>
    <button @click="toggleShow()">Click me!</button>
    <div v-bind:class="[isShowing ? setClass : '', addClass]">
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weare',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App Yuki',
      isShowing: true,
      setClass: 'activate-show',
      addClass: 'showAnimation'
    }
  },
  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  }
}
</script>

<style lang="sass" scoped>

$color-blue: blue
$color-white: white

.weare
  background-color: $color-blue
  h1
    color: $color-white

button
  display: block
  background-color: $color-white
  margin: auto
  transition: all 1s ease
  padding: 10px 7px
  &:hover
    background-color: green
    color: $color-white

p
  color: $color-white
  padding: 30px 0

.showAnimation
  transition: all 0.5s ease
  height: 0

.activate-show
  height: 90px

</style>
