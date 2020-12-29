<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <router-link tag="ion-button" fill="clear" shape="round" to="/">
                        <ion-icon name="arrow-back"></ion-icon>
                    </router-link>
                </ion-buttons>
                <ion-title text-center>Profile</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>

            <User #user="{ user }">
                <div v-if="user">
                    logged in!
                </div>

                <div v-else>
                    <ion-spinner name="dots" class="centerAll"></ion-spinner>
                </div>
            </User>

        </ion-content>
    </div>
</template>

<script>
import User from '../components/User'

export default {
    components: {
        User,
    }
}
</script>

<style scoped>


</style>