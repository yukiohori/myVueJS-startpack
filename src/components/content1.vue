<template>
  <div id="content1">
    <h2>Write Content</h2>
    <textarea @input="content = $event.target.value" ></textarea>
    <span>Color: </span><input type="text" @input="setColor = $event.target.value" />
    <div :style="'background-color: '+setColor">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content1',
  data () {
    return {
      content: '',
      isShowing: true,
      setColor: ''
    }
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

</style>
