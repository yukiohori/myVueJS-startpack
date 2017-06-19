<template>
  <div class="content2">
    <app-header></app-header>
    <div class="row">
      <h1 class="text-center">Public Chat! (Firebase)</h1>
      <div class="small-12 medium-3 large-3 column">
        <div v-show="isLogin==false" class="user-chat-style">
            <h2 class="text-center">User</h2>
            <input type="text" v-model="newChat.name" placeholder="Type Name">
            <div class="text-center">
              <button @click="chatStart()">Let's Chat</button>
            </div>
        </div>
        <div v-show="isLogin==true" class="user-chat-style">
          <form id="form" v-on:submit.prevent="sendChat">
            <p class="text-center">{{ newChat.name }}</p>
            <textarea v-on:keyup.enter="sendChat" v-model="newChat.content" placeholder="Write Content"></textarea>
            <div class="text-center">
              <input type="submit" value="Chat!">
              <button @click="leaving()">Leave</button>
            </div>
          </form>
        </div>
        <div class="user-chat-style">
          <h2 class="text-center">Online</h2>
          <li v-for="user in users">
            <span>{{user.name}}</span>
          </li>
        </div>
      </div>
      <div class="small-12 medium-9 large-9 column">
        <li v-for="chat in chats" class="user-chat-style" :key="chat['.key']">
          <h3>{{chat.name}}</h3>
          <p>{{chat.content}}</p>
          <!--<button v-show="userID == chat.id" v-on:click="removeChat(chat)">X</button>-->
        </li>
      </div>
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
var usersRef = Firebase.database().ref('users')

export default {
  name: 'content2',
  mounted: function () {
    // window.beforeunload = this.leaving()
    window.onload = this.checkUser()
  },
  data () {
    return {
      localID: 'yosChatSystemDemostration',
      userID: '',
      isLogin: false,
      content: '',
      contentArray: [],
      newChat: {
        id: '',
        name: '',
        content: ''
      }
    }
  },
  firebase: {
    chats: chatsRef,
    users: usersRef
  },
  components: {
    'app-header': header,
    'app-footer': footer
  },
  methods: {
    sendChat: function () {
      if (this.newChat.name !== '' && this.newChat.content !== '') {
        chatsRef.push(this.newChat)
        this.newChat.content = ''
        this.showAlert()
      }
    },
    removeChat: function (chat) {
      chatsRef.child(chat['.key']).remove()
    },
    showAlert: function () {
      console.log('alert 1')
      setTimeout(function () {
        console.log('alert 2')
      }, 1000)
    },
    chatStart: function () {
      if (this.newChat.name !== '') {
        this.userID = usersRef.push(this.newChat).key
        this.newChat.id = this.userID
        this.isLogin = true
        localStorage.setItem(this.localID, JSON.stringify(this.newChat))
      }
    },
    leaving: function () {
      this.newChat.id = ''
      this.newChat.name = ''
      this.newChat.content = ''
      this.isLogin = false
      localStorage.removeItem(this.localID)
      usersRef.child(this.userID).remove()
    },
    checkUser: function () {
      if (localStorage.yosChatSystemDemostration) {
        this.newChat = JSON.parse(localStorage.yosChatSystemDemostration)
        this.userID = this.newChat.id
        this.isLogin = true
      } else {
        this.chatStart()
      }
    }
  }
  // destroyed () {
  //   usersRef.child(this.userID).remove()
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

h2,p,input
  display: block
  margin: auto

h3
  margin: 0

.content2
  margin-top: 50px

.user-chat-style
  background-color: cadetblue
  color: white
  list-style: none
  margin: 10px 0
  padding: 20px

input[type=text], textarea
  width: 100%

button, input[type=submit]
  background-color: white
  padding: 5px
  margin: 5px auto
  border: none
  border-radius: 5px

</style>
