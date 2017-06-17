<template>
  <div id="content1" class="content1">
    <app-header></app-header>
    <h2>Write Content</h2>
    <textarea @input="content = $event.target.value" ></textarea>
    <span>Color: </span><input type="text" @input="setColor = $event.target.value" />
    <div :style="'background-color: '+setColor">
      <p>{{ content }}</p>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'

export default {
  name: 'content1',
  data () {
    return {
      content: '',
      isShowing: true,
      setColor: ''
    }
  },
  components: {
    'app-header': header,
    'app-footer': footer
  },
  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

h1, h2 {
  font-weight: normal;
  display: block;
}

textarea {
  margin: auto;
  display: block;
}

.content1{
  padding-top: 50px;
}


</style>
