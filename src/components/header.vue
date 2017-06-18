<template>
  <div class="nav-bar">
    <div class="row nav-style">
      <div class="menu-bar"><router-link to="/">Home</router-link></div>
      <div class="menu-bar"><router-link to="/about">About</router-link></div>
      <div class="menu-bar show-for-medium"><router-link to="/"><img class="logo" src="../assets/logo.png"></router-link></div>
      <div class="menu-bar"><router-link to="/content1">Contact</router-link></div>
      <div class="menu-bar"><router-link to="/content2">Chat</router-link></div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h1, h2
  font-weight: normal

.logo
  width: 30px

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

.nav-style
  display: flex
  flex-direction: row
  justify-content: space-between

.menu-bar
  text-align: center
  width: 100%
  a
    text-decoration: none

</style>
