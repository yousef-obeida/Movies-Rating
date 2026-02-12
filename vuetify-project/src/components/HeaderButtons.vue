<script setup>
import { useAuthStore } from '@/stores/Dashboard'

const auth = useAuthStore()
</script>

<template>
  <div class="d-flex align-center mr-16">
    <v-btn class="text-white text-uppercase font-weight-bold" to="/" variant="text">Home</v-btn>
    <v-btn class="text-white text-uppercase font-weight-bold" to="/Movies" variant="text">Movies</v-btn>
    <v-btn v-if="auth.isAdmin" class="text-white text-uppercase font-weight-bold" to="/Dashboard" variant="text">Dashboard</v-btn>
  </div>
</template>
