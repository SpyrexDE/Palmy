<template>
    <User #user="{ user }">
        <div>
                <ion-header>
                    <ion-toolbar color="primary">
                        <ion-buttons slot="start">
                            <router-link tag="ion-button" fill="clear" shape="round" to="/chatrooms">
                                <ion-icon name="arrow-back"></ion-icon>
                            </router-link>
                        </ion-buttons>
                        <ion-title text-center>Chat</ion-title>
                    </ion-toolbar>
                </ion-header>


                    <ion-card>
                        <div>
                            <h3>{{ chatId }}</h3>
                        </div>
                            

                        <div>
                            <ion-content id="messagesView">
                                    <ion-list id="messagesList">
                                        <ion-item v-for="message of messages" :key="message.key">
                                            <ChatMessage 
                                                :message="message" 
                                                :owner="user.uid === message.sender"
                                            />
                                        </ion-item>
                                    </ion-list>
                            </ion-content>
                        </div>

                        <div>
                            <ion-input id="messageInput" @ionInput="newMessageText=$event.target.value;" placeholder="Message"></ion-input>
                            <ion-button shape="round" :disabled="!newMessageText || loading" fill="outline" @click="addMessage(user.uid)" style="color: var(--ion-color-primary);"><ion-icon v-if="!loading" name="paper-plane-outline" color="primary"></ion-icon><ion-spinner v-else name="dots"></ion-spinner></ion-button>
                        </div>
                    </ion-card>
                    


        </div>
    </User>
</template>

<script>

import User from '../components/User.vue';
import Login from './Login.vue';
import { db, storage } from '../firebase';
import ChatMessage from '../components/ChatMessage.vue';

export default {
  components: {
    User,
    Login,
    ChatMessage
  },
  data() {
      return {
          newMessageText: '',
          loading: false,
          messages: [],
      }
  },
  computed: {
    chatId() {
      return this.$route.params.id;
    },
    messagesCollection() {
      return db.doc(`chats/${this.chatId}`).collection('messages');
    },
  },
  firestore() {
    return {
      messages: this.messagesCollection.orderBy('createdAt').limitToLast(20)
    };
  },
    methods: {
        async addMessage(uid) {
            this.loading = true;

            const { id: messageId } = this.messagesCollection.doc();

            await this.messagesCollection.doc(messageId).set({
                text: this.newMessageText,
                sender: uid,
                createdAt: Date.now(),

            });

            this.newMessageText = "";
            document.getElementById('messageInput').value = "";
            document.getElementById('messagesView').scrollTo(0, document.getElementById('messagesList').clientHeight, 300);
            this.loading = false;
        },
    },
    mounted() {
        setTimeout(function() {
            document.getElementById('messagesView').scrollTo(0, document.getElementById('messagesList').clientHeight, 300);
        }, 700);
    }
};
</script>

<style scoped>
ion-content {
    height: 350px;
    width: 98%;
}
ion-card {
    max-height: 70%;
    max-width: 800px;
    margin: auto;
    margin-top: 40px;
    padding-top: 25px;
    padding-bottom: 25px;
}
ion-item {
    margin-top: 10px;
}
</style>