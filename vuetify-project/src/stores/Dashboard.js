import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null, // full user object
    role: null, // 'admin' or 'user'
    isLoggedIn: false,
  }),

  getters: {
    isAdmin: (state) => state.role === 'admin',
  },

  actions: {
    login (userData) {
      this.user = userData
      this.role = userData.role
      this.isLoggedIn = true
    },

    logout () {
      this.user = null
      this.role = null
      this.isLoggedIn = false
    },
  },
})
