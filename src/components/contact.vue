<template>
  <div id="content1" class="content1">
    <app-header></app-header>
    <div class="row">
      <h2 class="text-center">Write Content</h2>
      <p class="text-center">Description!</p>
      <textarea v-model="content" @input="content = $event.target.value" v-on:keyup.enter="addData" placeholder="Add"></textarea>
      <div class="text-center">
        <p>Color: </p><input type="text" @input="setColor = $event.target.value" />
      </div>
      <div class="text-center" :style="'background-color: '+setColor">
        <p>{{ content }}</p>
      </div>
      <div class="text-center">
        <p v-for="(data, index) in contentArray">{{ data }} <button v-on:click="removeData(index)">X</button></p>
      </div>
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
      setColor: '',
      contentArray: []
    }
  },
  components: {
    'app-header': header,
    'app-footer': footer
  },
  methods: {
    toggleShow: () => {
      this.isShowing = !this.isShowing
    },
    addData: function () {
      if (this.content !== '') {
        this.contentArray.push(this.content)
        this.content = ''
      }
    },
    removeData: function (indexData) {
      this.contentArray.splice(indexData, 1)
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
