<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue'
import { API_DETAILS_URL } from '../constants/api-url';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const movieData = ref({
   actor: [{ url: '123', name: 'test' }],
   aggregateRating: { ratingValue: 0, ratingCount: 0 },
   genre: [],
   duration: ''
})
const isLoading = ref(false)
const store = useStore()
onMounted(async () => {
   isLoading.value = true
   const route = useRoute()
   const { data } = await axios(API_DETAILS_URL + route.params.movieId)
   movieData.value = data.short
   isLoading.value = false
})
const darkTheme = store.state.theme
</script>

<template>
   <div :class="darkTheme ? 'theme-dark' : 'theme-light'">
      <div id='wrapper'>
         <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
         <div v-else>
            <router-link to='/movies'>
               <i class='bi-arrow-left'></i>
            </router-link>
            <img :src="movieData.image" :alt="movieData.name + ' movie image'" width="300" />
            <div>{{ 'Description: ' + movieData.description }}</div>
            <div>
               Actors:
               <div v-for="actor of movieData.actor">
                  <a style="{display: block}" :key="actor.url.match(/[0-9]/g).join('')" :href="actor.url">
                     {{ actor.name }}
                  </a>
               </div>
            </div>
            <div>
               Rating:
               <div class="progress" role="progressbar" aria-label="Basic example"
                  aria-valuenow={movieData.aggregateRating.ratingValue} aria-valuemin="0" aria-valuemax="10">
                  <div class="progress-bar" :style="{ width: movieData.aggregateRating.ratingValue * 10 + '%' }">
                     {{ movieData.aggregateRating.ratingValue * 10 + '%' }}</div>
               </div> / {{ movieData.aggregateRating.ratingCount }} Votes
            </div>
            <div>Genres: {{ movieData.genre.join(', ') }}</div>
            <div>Duration: {{ movieData.duration.replace('PT', '') }}</div>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped></style>