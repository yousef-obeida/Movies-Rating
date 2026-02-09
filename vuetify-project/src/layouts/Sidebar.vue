<template>
  <div>
    <v-navigation-drawer
      permanent
      width="280"
      class="bg-deep-purple-darken-4"
      style="background-color: #111827 !important; border-right: 1px solid #1f2937;"
      theme="dark"
    >
      <div class="d-flex align-center pa-6">
        <v-img
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
          height="32"
          width="32"
          class="flex-grow-0 mr-3"
          contain
        />
        <span class="text-h6 font-weight-bold text-white">Workflow</span>
      </div>

    <v-list class="px-3" nav>
        <v-list-item
          v-for="(item, i) in navigation"
          :key="i"
          :value="item"
          color="white"
          rounded="lg"
          class="mb-1"
          :class="item.current ? 'bg-grey-darken-4' : 'text-grey-lighten-1'"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" size="small" :color="item.current ? 'white' : 'grey-lighten-1'"></v-icon>
          </template>
          <v-list-item-title :class="item.current ? 'text-white' : 'text-grey-lighten-1'">
            {{ item.name }}
          </v-list-item-title>
          
          <template v-slot:append v-if="item.count">
             <v-badge inline :content="item.count" color="black" class="font-weight-medium"></v-badge>
          </template>
        </v-list-item>
      </v-list>

      <div class="px-6 mt-4 mb-2">
        <div class="text-caption font-weight-bold text-grey-darken-1">YOUR TEAMS</div>
      </div>

      <v-list class="px-3" nav>
        <v-list-item
          v-for="(team, i) in teams"
          :key="i"
          :value="team"
          color="white"
          rounded="lg"
          class="mb-1 text-grey-lighten-1"
        >
            <template v-slot:prepend>
                <v-sheet
                    height="24"
                    width="24"
                    class="d-flex align-center justify-center rounded bg-grey-darken-4 mr-4 text-caption text-white border border-grey-darken-3"
                    style="border-color: #374151 !important;"
                >
                    {{ team.initial }}
                </v-sheet>
            </template>
            <v-list-item-title class="text-grey-lighten-1">{{ team.name }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-divider color="grey-darken-2"></v-divider>
        <div class="pa-4 d-flex align-center">
             <v-avatar size="32" class="mr-3">
                <v-img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Tom Cook"
                />
             </v-avatar>
             <div class="d-flex flex-column">
                <span class="text-subtitle-2 text-white font-weight-medium">Tom Cook</span>
                <span class="text-caption text-grey">Your profile</span>
             </div>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main class="bg-grey-lighten-4">
      <slot />
    </v-main>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const navigation = ref([
  { name: 'Dashboard', icon: 'mdi-home', current: true },
  { name: 'Team', icon: 'mdi-account-group', current: false },
  { name: 'Projects', icon: 'mdi-folder', current: false, count: '5' },
  { name: 'Calendar', icon: 'mdi-calendar', current: false },
  { name: 'Documents', icon: 'mdi-file-document', current: false },
  { name: 'Reports', icon: 'mdi-chart-bar', current: false },
])

const teams = ref([
  { id: 1, name: 'Heroicons', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', initial: 'T', current: false },
  { id: 3, name: 'Workcation', initial: 'W', current: false },
])
</script>

<style scoped>
/* Custom overrides to match Tailwind colors exactly if needed */
.v-navigation-drawer {
    background-color: #111827 !important; /* gray-900 */
}
</style>
