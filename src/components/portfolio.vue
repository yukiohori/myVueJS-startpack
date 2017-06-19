<template>
  <div class="portfolio">
    <app-header></app-header>
    <div class="row">
      <h1>This is Portfolio Page</h1>
      <div class="gallery">
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 1
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 2
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 3
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 4
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 5
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 6
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 7
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 8
          </div>
        </div>
        <div class="small-12 medium-6 large-4 column">
          <div class="portfolio-each">
            Gallery 9
          </div>
        </div>
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
      isShowing: true,
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

.portfolio
  padding-bottom: 50px

h1
  margin-top: 50px

.portfolio-each
  background-color: cadetblue
  height: 300px
  margin: 5px 0
  cursor: pointer
  display: flex
  justify-content: center
  align-items: center
  color: white

</style>
