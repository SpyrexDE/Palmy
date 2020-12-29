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
                            <br>
                            <ion-text class="errorMsg">{{ err }}</ion-text>
                            <ion-text class="successMsg">{{ suc }}</ion-text>
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
            err: '',
            suc: '',
        }
    },
    methods: {
        register: async function(){
            this.loading = true;
            try{
                await auth.createUserWithEmailAndPassword(this.email, this.password);
                
                // now we have access to the signed in user
                const user = auth.currentUser;
                // send the signed in user a verification email
                await user.sendEmailVerification();
            
                this.suc = "Please check your inbox for an validation E-Mail";

            } catch(error) {
                this.loading = false;
                this.err = error.message;
            }
            this.loading = false;
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
    padding-bottom: 14px;
}

#registerBtn {
    margin: 25px;
    color: var(--ion-color-primary);
}

.errorMsg{
    color: var(--ion-color-danger);
}

.successMsg{
    color: var(--ion-color-success);
}

</style>