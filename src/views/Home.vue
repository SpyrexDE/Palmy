<template>
  <div>
    <User #user="{ user }">
      <ion-header>
        <ion-toolbar color="primary" >

          <ion-buttons slot="start" v-if="user">
            <router-link tag="ion-button" fill="outline" to="profile" style="color: var(--ion-color-success);" shape="round">
                <ion-icon name="person" color="var(--ion-color-success);"></ion-icon>
            </router-link>
            <router-link tag="ion-button" fill="outline" to="chatrooms" style="color: azure;" shape="round">
                <ion-icon name="chatbubble-ellipses-outline" color="azure"></ion-icon>
            </router-link>
          </ion-buttons>

          <ion-title>Palmy</ion-title>

          <ion-buttons slot="end" v-if="!user">
            <router-link tag="ion-button" fill="clear" shape="round" to="login">
              <ion-icon name="person"></ion-icon>
            </router-link>
          </ion-buttons>

          <ion-buttons slot="end" v-else>
            <ion-button fill="outline" @click="auth.signOut(); $router.push({name: 'login'});" style="color: var(--ion-color-danger);">
                Logout
            </ion-button>
          </ion-buttons>

        </ion-toolbar>
      </ion-header>
    

    <HomePage></HomePage>

    </User>
  </div>
</template>

<script>
import User from '../components/User'
import HomePage from '../components/HomePage'
import { auth } from '../firebase'

export default {
  name: 'home',
  components: {
    User,
    auth,
    HomePage,
  },
  data() {
    return {
      auth
    }
  },
}
</script>

<style scoped>
ion-button {
  margin-left: 10px;
}
</style>

<style>
@import 'https://fonts.googleapis.com/css?family=Roboto+Mono:100';
  .dud{
    color: #c3c3c3;
  }
  .scramble{
    font-family: 'Roboto Mono', monospace;
  }
</style>