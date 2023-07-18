
<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(['TITLE', 'IMDB_ID', 'RANK', 'ACTORS', 'AKA', 'IMG_POSTER'])
</script>
<template>
   <router-link :to="'/movies/' + IMDB_ID" class="movie-card">
      <div>
         <img :src=IMG_POSTER :alt=TITLE width="300" />
         <h2>{{TITLE}}</h2>
         <p>AKA: {AKA}</p>
      </div>
   </router-link>
</template>
<style scoped lang="scss">
   
</style>