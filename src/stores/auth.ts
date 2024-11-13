import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import router from '@/router';
import { auth } from '@/utils/firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signInWithPopup, signOut, User } from 'firebase/auth';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { alertController } from '@ionic/vue';
import { isPlatform } from '@ionic/vue';

export const useAuthStore = defineStore('auth', () => {
    // Variabel User
    const user = ref<User | null>(null);

    // Variabel isAuth mengembalikan true or false
    const isAuth = computed(() => user.value !== null);

    // Sign In with Google
    const loginWithGoogle = async () => {
        try {
            if (isPlatform('capacitor')) {
                // Autentikasi di platform mobile (iOS/Android)
                await GoogleAuth.initialize({
                    clientId: '165152231903-ej9jf4ak42h9ec107d8tko1huhmeca70.apps.googleusercontent.com',
                    scopes: ['profile', 'email'],
                });

                const googleUser = await GoogleAuth.signIn();
                const idToken = googleUser.authentication.idToken;
                const credential = GoogleAuthProvider.credential(idToken);
                const result = await signInWithCredential(auth, credential);
                user.value = result.user;
            } else {
                // Autentikasi di platform web
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                user.value = result.user;
            }

            router.push("/home");
        } catch (error) {
            console.error("Google sign-in error:", error);

            const alert = await alertController.create({
                header: 'Login Gagal!',
                message: 'Terjadi kesalahan saat login dengan Google. Coba lagi.',
                buttons: ['OK'],
            });

            await alert.present();

            throw error;
        }
    };

    // Logout
    const logout = async () => {
        try {
            await signOut(auth);
            if (isPlatform('capacitor')) {
                await GoogleAuth.signOut();
            }
            user.value = null;
            router.replace("/login");
        } catch (error) {
            console.error("Sign-out error:", error);
            throw error;
        }
    };

    // Update user state on authentication change
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
    });

    return { user, isAuth, loginWithGoogle, logout };
});
