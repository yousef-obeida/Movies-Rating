<template>
  <v-container
    class="bg-blue-grey-darken-4 fill-height py-16"
    fluid
  >
    <v-responsive
      class="mx-auto"
      max-width="1200"
    >

      <!-- Filter Bar -->
      <div class="d-flex justify-space-between align-center mb-6 pt-4 pb-4 border-b border-grey-darken-3">
         <!-- Sort (Left) -->
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="text"
              color="grey-lighten-1"
              class="text-none font-weight-regular px-2"
            >
              Sort
              <v-icon end size="small">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in sortOptions" :key="item" :value="item" link>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <search-bar></search-bar>

        <!-- Filters (Right) -->
        <div class="d-flex align-center">
          <v-menu v-for="filter in filters" :key="filter.label">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                variant="text"
                color="grey-lighten-1"
                class="text-none font-weight-regular ml-2 px-2"
              >
                {{ filter.label }}
                <v-icon end size="small">mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="option in filter.options" :key="option" :value="option" link>
                <v-list-item-title>{{ option }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- Blog Grid -->
      <v-row>
        <v-col
          v-for="movie in movies"
          :key="movie.id"
          cols="12"
          md="4"
        >
          <v-card
            class="rounded-xl overflow-hidden position-relative"
            elevation="10"
            height="400"
          >
            <!-- Image with Gradient Overlay -->
            <v-img
              class="align-end"
              cover
              gradient="to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.9) 100%"
              height="100%"
              :src="movie.image"
            >
              <!-- Card Content Overlay -->
              <div class="pa-6 text-white text-left">
                <!-- Meta Info Row -->
                <div class="d-flex align-center mb-3 text-caption font-weight-medium text-grey-lighten-2">
                  <span class="mr-4">{{ movie.date }}</span>

                  <div class="d-flex align-center">
                    <v-icon
                      color="yellow-darken-2"
                      class="mr-1"
                      size="small"
                    >
                      mdi-star
                    </v-icon>
                    <span>{{ movie.score }}</span>
                  </div>
                </div>

                <!-- Blog Title -->
                <h3 class="text-h5 font-weight-bold leading-tight">
                  {{ movie.title }}
                </h3>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import SearchBar from '@/components/searchBar.vue';
import { ref, onMounted } from 'vue'
import { getPopularMovies } from '@/services/api'

  const movies = ref([])

  onMounted(async () => {
    try {
      movies.value = await getPopularMovies()
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  })

  const sortOptions = ['Most Popular', 'Best Rating', 'Newest', 'Price: Low to High', 'Price: High to Low']
  
  const filters = [
    { label: 'Category', options: ['Action', 'Comedy', 'Drama', 'Horror'] },
    { label: 'Brand', options: ['Marvel', 'DC', 'Disney', 'Sony'] },
  ]
</script>

<style scoped>
/* Optional: slightly adjust the container background to match the screenshot better if needed */
.bg-blue-grey-darken-4 {
  background-color: black !important; /* Tailwind's slate-900 match */
}
</style>
