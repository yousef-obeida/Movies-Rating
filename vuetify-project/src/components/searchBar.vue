<template>
    <!-- Search Bar (Hidden on small screens) -->
    <div class="d-none d-md-flex align-center" style="width: 400px;">
      <v-text-field
        density="compact"
        variant="solo"
        label="Search movies..."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        rounded="lg"
        theme="dark"
        bg-color="grey-darken-3"
      ></v-text-field>
    </div>
</template>
<script setup>
  //
</script>
