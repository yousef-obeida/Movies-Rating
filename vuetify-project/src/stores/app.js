// Utilities
import { defineStore } from 'pinia'
import { getProducts } from '@/services/api'

export const useAppStore = defineStore('app', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProducts () {
      this.loading = true
      this.error = null
      try {
        this.products = await getProducts()
      } catch (error) {
        console.error('Error fetching products:', error)
        this.error = error
      } finally {
        this.loading = false
      }
    },
  },
})
