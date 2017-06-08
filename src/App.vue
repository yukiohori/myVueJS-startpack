<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/yuki">Yuki</router-link>
      <router-link to="/content1">Content 1</router-link>
      <router-link to="/content2">Content 2</router-link>
    </div>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
