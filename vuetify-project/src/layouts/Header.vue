<template>
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

  <v-app-bar class="bg-black" :elevation="5" height="80">
    <template #prepend>
      <v-icon class="ml-2" color="red-accent-4" size="large" style="transform: translateY(-4px)">
        <span class="material-symbols-outlined" style="font-size: 40px;">movie</span>
      </v-icon>
    </template>

    <v-app-bar-title class="ml-2">
      <span class="text-white ml-1" style="font-family: 'Bebas Neue', cursive; font-size: 2rem; letter-spacing: 2px;">
        MOVIES RATING
      </span>
    </v-app-bar-title>

    <v-spacer />

    <v-spacer />

    <HeaderButtons />
  </v-app-bar>

  <v-main>
    <router-view />
  </v-main>

</template>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
}
</style>

<script setup> 
import { signOut } from 'firebase/auth';
import { auth } from '@/services/firebase';
import HeaderButtons from '@/components/HeaderButtons.vue'; 
const logout = async () => {
  try {
    await signOut(auth);
    authStore.logout();
    router.push('/');
  } catch (error) {
    console.error('Logout error:', error);
  }
};</script>
