
<script setup>

import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { displayModes } from '../constants/display-modes'

defineProps({
   TITLE: String,
   IMDB_ID: String,
   RANK: Number,
   ACTORS: String,
   AKA: String,
   IMG_POSTER: String
})

const store = useStore()
</script>
<template>
   <router-link :to="'/movies/' + IMDB_ID" class="movie-card">
      <div>
         <img :src=IMG_POSTER :alt=TITLE width="300" />
         <h2>{{ TITLE }}</h2>
         <p>AKA: {{ AKA }}</p>
         <p v-if="store.state.displayMode === displayModes.list">
         <p>IMDB Ranked #{{ RANK }}</p>
         <p>Featuring: {{ ACTORS }}</p>
         </p>
      </div>
   </router-link>
</template>
<style scoped lang="scss"></style>