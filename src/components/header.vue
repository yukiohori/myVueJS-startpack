<template>
  <div>
    <div class="nav-bar">
      <div class="menu-bar"><router-link to="/">Home</router-link></div>
      <div class="menu-bar"><router-link to="/about">About</router-link></div>
      <div class="menu-bar"><router-link to="/content1">Content 1</router-link></div>
      <div class="menu-bar"><router-link to="/content2">Content 2</router-link></div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2
  font-weight: normal
  display: block

textarea
  margin: auto
  display: block

.nav-bar
  background-color: cadetblue
  padding: 10px 0
  position: fixed
  top: 0
  left: 0
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between


.menu-bar
  text-align: center
  width: 100%
  a
    text-decoration: none

</style>
