<template>
  <div class="home">
    <app-header></app-header>
    <h1>{{ msg }}</h1>
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
      msg: 'Welcome to Your Vue.js App Yuki'
    }
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

</style>
