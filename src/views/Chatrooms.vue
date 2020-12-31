<template>
    <div>
        <User #user="{ user }">
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start">
                        <router-link tag="ion-button" fill="clear" shape="round" to="/">
                            <ion-icon name="arrow-back"></ion-icon>
                        </router-link>
                    </ion-buttons>
                    <ion-title text-center>Chatrooms</ion-title>
                </ion-toolbar>
            </ion-header>

                <ion-card>

                            <ChatList :uid="user.uid"/>

                </ion-card>
                
        </User>
    </div>
</template>

<script>
import ChatList from '../components/ChatList.vue'
import User from '../components/User'

export default {
    components: {
        User,
        ChatList,
    },
}
</script>

<style scoped>

ion-card{
    max-width: 450px;
    margin: auto;
    margin-top: 40px;
    padding-top: 25px;
    padding-bottom: 25px;
    max-height: 70%;
}

ion-grid {
    margin: 20px;
}

ion-col{
    max-width: 35%;
}


.propField {
    text-align: left;
}

.valField {
    text-align: left;
}



</style>