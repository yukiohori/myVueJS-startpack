<template>
  <div class="home">
    <app-header></app-header>
    <h1>{{ msg }}</h1>
    <div class="row">
      <div id="slider">
        <figure>
        <!--<img :src="imgSlider[currentNumber]" />-->
          <img src="https://firebasestorage.googleapis.com/v0/b/unity3dweb-fe81f.appspot.com/o/slide1.jpg?alt=media&token=ba3d4efb-2625-4381-989e-4030911ef643" />
          <img src="https://firebasestorage.googleapis.com/v0/b/unity3dweb-fe81f.appspot.com/o/slide2.jpg?alt=media&token=31e4dae8-a78c-472b-9416-c6220512a089" />
          <img src="https://firebasestorage.googleapis.com/v0/b/unity3dweb-fe81f.appspot.com/o/slide3.jpg?alt=media&token=4cabc228-1ac6-4ec9-b36e-f20b704f9f74" />
          <img src="https://firebasestorage.googleapis.com/v0/b/unity3dweb-fe81f.appspot.com/o/slide1.jpg?alt=media&token=ba3d4efb-2625-4381-989e-4030911ef643" />
        </figure>
      </div>
    </div>
    <div>
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
      currentNumber: 0,
      msg: 'Welcome to Vue.js App Yuki',
      scrolled: false
    }
  },
  methods: {
    handleScroll: function () {
      this.scrolled = window.scrollY > 0
      // console.log(window.scrollY)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

.home
  margin-top: 50px

h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983

@keyframes slidy
  0% { left: 0%; }
  10% { left: 0%; }
  33% { left: -100%; }
  66% { left: -200%; }
  100% { left: -300%; }

div#slider
  overflow: hidden

div#slider figure img
  width: 20%
  float: left

div#slider figure
  position: relative
  width: 500%
  margin: 0
  left: 0
  text-align: left
  font-size: 0
  animation: 20s slidy infinite

</style>
