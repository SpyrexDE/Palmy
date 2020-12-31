<template>
  <div>

      <ion-content>
            <ion-list>
                <ion-item v-for="chat of chats" :key="chat.id">

                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                        <router-link class="palmyLink" :to="{ name: 'chat', params: { id: chat.id } }">{{ chat.id }}</router-link>

                </ion-item>
            </ion-list>
      </ion-content>

    <ion-button @click="createChatRoom()" fill="outline">Create New Chat Room</ion-button>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
    name: "ChatList",
    data() {
        return { 
            chats: [] 
        }
    },
    firestore() {
        return { 
            chats: db.collection('chats').where('owner', '==', this.uid) 
        }
    },
    methods: {
        async createChatRoom() {
            const newChat = await db.collection('chats').add({
                createdAt: Date.now(),
                owner: this.uid,
                members: [this.uid]
            })

                console.log(newChat)
        }


        
    },
    props: ['uid']

};
</script>

<style scoped>
ion-button {
    margin-top: 25px;
}
ion-icon {
    margin-left: 30px;
}
ion-content {
    height: 350px;
    width: 98%;
}
</style>