<template>
  <div class="content2">
    <h2>Content 2</h2>
    <p>Description!</p>
    <input type="text" v-model="content" v-on:keyup.enter="addData" placeholder="Add" />
    <p v-for="(data, index) in contentArray">{{ data }} <button v-on:click="removeData(index)">X</button></p>
  </div>
</template>

<script>
export default {
  name: 'content2',
  data () {
    return {
      content: '',
      contentArray: []
    }
  },
  methods: {
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
<style lang="sass" scoped>

h2,p,input
  display: block
  margin: auto

</style>
