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
                    <ion-title text-center>Profile</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-content>

                <ion-card>
                        <ion-icon name="person" style="color: #a9a9a9a9; height: 32px; width: 32px;"></ion-icon>
                        
                        <ion-grid>
                            <ion-row>
                                <ion-col>
                                <div class="propField">
                                    Username
                                </div>
                                </ion-col>
                                <ion-col>
                                <div class="valField">
                                    {{user.displayName || "Anonymous"}}
                                </div>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col>
                                <div class="propField">
                                    Email
                                </div>
                                </ion-col>
                                <ion-col>
                                <div class="valField">
                                    {{user.email || "Anonymous@AnonymoMail.com"}}
                                </div>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col>
                                <div class="propField">
                                    UID
                                </div>
                                </ion-col>
                                <ion-col>
                                <div class="valField">
                                    {{user.uid || "007 (⌐■_■)"}}
                                </div>
                                </ion-col>
                            </ion-row>
                        </ion-grid>

                </ion-card>
                
            </ion-content>
        </User>
    </div>
</template>

<script>
import User from '../components/User'

export default {
    components: {
        User,
    },
    mounted() {
        console.log(this.$refs);
    },
}
</script>

<style scoped>

ion-card{
    max-width: 500px;
    margin: auto;
    margin-top: 40px;
    padding-top: 25px;
    padding-bottom: 25px;
}

ion-grid {
    margin: 20px;
}

ion-col{
    max-width: 30%;
}

.propField {
    text-align: left;
}

.valField {
    text-align: left;
}



</style>