<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <router-link tag="ion-button" fill="clear" shape="round" to="login">
                        <ion-icon name="arrow-back"></ion-icon>
                    </router-link>
                </ion-buttons>
                <ion-title text-center>Register</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>

            
                <div id="registerContainer">
                    <div id="registerPanel">
                        <ion-card>

                                <ion-icon name="person" style="color: #a9a9a9a9; height: 32px; width: 32px;"></ion-icon>
                                <ion-input @ionInput="email=$event.target.value;" placeholder="E-Mail"></ion-input>
                                <ion-input @ionInput="password=$event.target.value;" placeholder="Password" formControlName="password" type="password"></ion-input>

                            <ion-button v-if="!loading" fill="outline" id="registerBtn" @click="register">Register</ion-button>
                            <ion-button v-else fill="outline" id="registerBtn"><ion-spinner name="dots"></ion-spinner></ion-button>
                        </ion-card>
                    </div>
                </div>

                
        </ion-content>
    </div>
</template>

<script>
import { auth } from '../firebase'

export default {
    data() {
        return {
            loading: false,
            loggedIn: false,
            email: '',
            password: '',
        }
    },
    methods: {
        register: function(){
            auth.createUserWithEmailAndPassword(this.email, this.password).then(()=>{
                this.login()
            });
            this.loading = true;
        },
        login: function(){
            auth.signInWithEmailAndPassword(this.email, this.password).then(()=>{
                this.$router.push({name:'home'});
                this.loading = false;
            });
        },
    }
}
</script>

<style scoped>

#registerPanel {
    vertical-align: middle;
    margin: auto;
    margin-top: 50px;
}

#registerContainer {
    height: 80%;
    min-height: 550px;
}

ion-card {
    max-width: 450px;
    margin: auto;
    margin-bottom: 20px;
    padding-top: 25px;
}

#registerBtn {
    margin: 25px;
    color: var(--ion-color-primary);
}

</style>