<template>
  <div class="content2">
    <app-header></app-header>
    <div class="row">
      <h2>Connect to Database (Firebase!)</h2>
      <p>Description!</p>
      <input type="text" v-model="content" v-on:keyup.enter="addData" placeholder="Add" />
      <p v-for="(data, index) in contentArray">{{ data }} <button v-on:click="removeData(index)">X</button></p>
      <li v-for="chat in chats" class="user" :key="chat['.key']">
        <span>{{chat.name}} - {{chat.content}}</span>
        <button v-on:click="removeChat(chat)">X</button>
      </li>
      <form id="form" v-on:submit.prevent="sendChat">
        <input type="text" v-model="newChat.name" placeholder="Username">
        <textarea v-model="newChat.content" placeholder="Write Content"></textarea>
        <input type="submit" value="Chat!">
      </form>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Firebase from 'firebase'
import header from './header.vue'
import footer from './footer.vue'

var config = {
  apiKey: 'AIzaSyAnPqUHrhBEfKkvqo6jXyAE8Hc58Rk4nxI',
  authDomain: 'unity3dweb-fe81f.firebaseapp.com',
  databaseURL: 'https://unity3dweb-fe81f.firebaseio.com',
  projectId: 'unity3dweb-fe81f',
  storageBucket: 'unity3dweb-fe81f.appspot.com',
  messagingSenderId: '55824575521'
}

Firebase.initializeApp(config)

var chatsRef = Firebase.database().ref('chats')

export default {
  name: 'content2',
  data () {
    return {
      content: '',
      contentArray: [],
      newChat: {
        name: '',
        content: ''
      }
    }
  },
  firebase: {
    chats: chatsRef
  },
  components: {
    'app-header': header,
    'app-footer': footer
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
    },
    sendChat: function () {
      if (this.newChat.name !== '' && this.newChat.content !== '') {
        chatsRef.push(this.newChat)
        this.newChat.content = ''
      }
    },
    removeChat: function (chat) {
      chatsRef.child(chat['.key']).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h2,p,input
  display: block
  margin: auto

.content2
  margin-top: 50px

</style>
