
<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import { displayModes } from '../constants/display-modes';
const props = defineProps(['TITLE', 'IMDB_ID', 'RANK', 'ACTORS', 'AKA', 'IMG_POSTER'])
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