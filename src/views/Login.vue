<template>
    <div>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <router-link tag="ion-button" fill="clear" shape="round" to="/">
                        <ion-icon name="arrow-back"></ion-icon>
                    </router-link>
                </ion-buttons>
                <ion-title text-center>Login</ion-title>
                <ion-buttons slot="secondary">
                    <router-link tag="ion-button" fill="outline" to="register" style="color: var(--ion-color-success);">
                        Register
                    </router-link>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>

            
                <div id="loginContainer">
                    <div id="loginPanel">
                        <ion-card>

                                <ion-icon name="person" style="color: #a9a9a9a9; height: 32px; width: 32px;"></ion-icon>
                                <ion-input @ionInput="email=$event.target.value;" placeholder="E-Mail"></ion-input>
                                <ion-input @ionInput="password=$event.target.value;" placeholder="Password" formControlName="password" type="password"></ion-input>

                            <ion-button v-if="!loading" fill="outline" id="loginBtn" @click="login">Login</ion-button>
                            <ion-button v-else fill="outline" id="loginBtn"><ion-spinner name="dots"></ion-spinner></ion-button>
                        </ion-card>
                        <ion-card>

                                <ion-text style="color: darkgray;">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="32" height="32"
                                    viewBox="0 0 172 172"
                                    style="fill: #a9a9a9a9;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#a9a9a9a9"><path d="M86,21.5c-29.20557,0 -52.57422,23.24268 -53.41406,52.23828c-6.38281,3.71631 -11.08594,9.93115 -11.08594,17.63672c0,8.56641 5.52197,15.09619 12.76563,18.64453c6.10986,22.92773 26.77002,40.48047 51.73438,40.48047c24.96435,0 45.62451,-17.55273 51.73438,-40.48047c7.24365,-3.54834 12.76563,-10.07812 12.76563,-18.64453c0,-7.70557 -4.70312,-13.92041 -11.08594,-17.63672c-0.83984,-28.9956 -24.20849,-52.23828 -53.41406,-52.23828zM86,32.25c23.99854,0 43,19.00146 43,43v4.87109l3.69531,1.34375c4.3252,1.44873 7.05469,5.12305 7.05469,9.91016c0,5.22803 -3.06543,8.88135 -8.0625,10.41406l-3.02344,1.00781l-0.67187,3.02344c-4.3042,19.08545 -21.45801,33.92969 -41.99219,33.92969c-20.53418,0 -37.68799,-14.84424 -41.99219,-33.92969l-0.67187,-3.02344l-3.02344,-1.00781c-4.99707,-1.53271 -8.0625,-5.18604 -8.0625,-10.41406c0,-4.78711 2.72949,-8.46143 7.05469,-9.91016l3.69531,-1.34375v-4.87109c0,-23.99854 19.00146,-43 43,-43zM86,53.75c-11.88379,0 -21.5,9.61621 -21.5,21.5h10.75c0,-6.40381 4.34619,-10.75 10.75,-10.75c6.40381,0 10.75,4.34619 10.75,10.75c0,6.40381 -4.34619,10.75 -10.75,10.75h-5.375v16.125h10.75v-6.38281c9.21729,-2.41455 16.125,-10.51904 16.125,-20.49219c0,-11.88379 -9.61621,-21.5 -21.5,-21.5zM80.625,107.5v10.75h10.75v-10.75z"></path></g></g></g></svg>
                                    <br>
                                    You also can login using an anonymous account.
                                </ion-text>
                            <br>
                            <ion-button v-if="!aLoading" fill="outline" id="loginBtn" @click="signInAnonymously">Login anonymously</ion-button>
                            <ion-button v-else fill="outline" id="loginBtn"><ion-spinner name="dots"></ion-spinner></ion-button>
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
            aLoading: false,
            loading: false,
            email: '',
            password: '',
        }
    },
    methods: {
        signInAnonymously: function(){
            this.aLoading = true;
            auth.signInAnonymously().then(()=>{
                this.$router.push({name:'home'});
                this.aLoading = false;
            });
        },
        login: function(){
            this.loading = true;
            auth.signInWithEmailAndPassword(this.email, this.password).then(()=>{
                this.$router.push({name:'home'});
                this.loading = false;
            });
        },
    }
}
</script>

<style scoped>

#loginPanel {
    vertical-align: middle;
    margin: auto;
    margin-top: 50px;
}

#loginContainer {
    height: 80%;
    min-height: 550px;
}

ion-card {
    max-width: 450px;
    margin: auto;
    margin-bottom: 20px;
    padding-top: 25px;
}

#loginBtn {
    margin: 25px;
    color: var(--ion-color-primary);
}

</style>