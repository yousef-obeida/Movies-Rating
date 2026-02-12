<template>
  <Header></Header>

  <v-container class="mt-10">
    <div class="d-flex justify-space-between align-center mb-8">
      <h1 class="text-h3 font-weight-bold">Dashboard</h1>
      <v-btn color="red-accent-4" @click="logout">Logout</v-btn>
    </div>

      <v-row>
        <v-col cols="12" md="4" v-for="stat in stats" :key="stat.title">
          <v-card class="bg-grey-darken-3 pa-6" flat rounded="lg">
            <div class="text-subtitle-2 text-grey-lighten-1 mb-2">{{ stat.title }}</div>
            <div class="text-h4 font-weight-bold text-white">{{ stat.value }}</div>
          </v-card>
        </v-col>
      </v-row>

      <ul role="list" class="divide-y divide-white/5 mt-8">
    <li v-for="person in people" :key="person.email" class="d-flex justify-space-between align-center py-4 text-white">
      <div class="d-flex align-center gap-4">
        <v-avatar :image="person.picture" size="48" class="mr-4"></v-avatar>
        <div class="d-flex flex-column">
          <p class="text-subtitle-2 font-weight-bold text-white mb-0">{{ person.name }}</p>
          <p class="text-caption text-grey-lighten-1 mb-0">{{ person.email }}</p>
        </div>
      </div>
      <div class="d-flex flex-column align-end hidden-sm-and-down">
        <p class="text-subtitle-2 text-white mb-0">{{ person.role }}</p>
        <p class="text-caption text-grey-lighten-1 mb-0">
          ID: {{ person.id }}
        </p>
      </div>
    </li>
  </ul>

  </v-container>
</template>

<script setup>
import Header from '@/layouts/Header.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/Dashboard';
import { signOut } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { getStats, getUsers } from '@/services/Adminapi';
import { ref, onMounted } from 'vue';

const router = useRouter();
const authStore = useAuthStore();

const stats = ref([
  { title: 'Total Visitors', value: '-' },
  { title: 'Avg. Open Rate', value: '-' },
  { title: 'Avg. Click Rate', value: '-' },
]);

const people = ref([]);

onMounted(async () => {
  try {
    const [statsData, usersData] = await Promise.all([
      getStats(),
      getUsers()
    ]);
    stats.value = statsData;
    people.value = usersData;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }
});

const logout = async () => {
  try {
    await signOut(auth);
    authStore.logout();
    router.push('/');
  } catch (error) {
    console.error('Logout error:', error);
  }
};
</script>
