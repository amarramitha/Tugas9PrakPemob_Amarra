<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div id="container">
                <!-- Title -->
                <ion-text class="title-text">
                    <h1>Praktikum Pemrograman Mobile</h1>
                </ion-text>

                <!-- Button Sign In -->
                <ion-button @click="login" color="light" class="google-signin-button">
                    <ion-icon slot="start" :icon="logoGoogle" aria-hidden="true"></ion-icon>
                    <ion-label>Sign In with Google</ion-label>
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton, IonIcon, IonText, IonLabel } from '@ionic/vue';
import { logoGoogle } from 'ionicons/icons';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const login = async () => {
    try {
        await authStore.loginWithGoogle();
    } catch (error) {
        console.error("Login error:", error);
        // Optionally, show an alert or toast notification to the user
    }
};
</script>

<style>
#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 16px;
}

.title-text {
    margin-bottom: 20px;
    text-align: center;
}

.google-signin-button {
    --border-radius: 8px;
}
</style>
