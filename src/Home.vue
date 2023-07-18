<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { API_SEARCH_URL } from './constants/api-url'
import MovieCard from './components/MovieCard.vue'
import { formatData } from './helpers/format-data'
import { displayModes } from './constants/display-modes'

const searchTerm = ref('')
const moviesData = ref([])
const handleSearchSubmit = async (e) => {
  e.preventDefault()
  // if (searchTerm.length === 0) {
  //   return
  // }
  // setIsLoading(true)
  const { data } = await axios(API_SEARCH_URL + searchTerm.value)
  const res = formatData(data.description)
  searchTerm.value = ''
  moviesData.value = res
  // const formattedData = formatData(data.description)
  // setSearchResult(formattedData)
  // setIsLoading(false)
}
</script>

<template>
  <div :class="$store.state.theme ? 'theme-dark' : 'theme-light'">
    <div id='home-wrapper'>
      <div className='search'>
        <div className='controls'>
          <form @submit="handleSearchSubmit">
            <input v-model="searchTerm" type='text' id='search' />
            <button>
              <i className='bi-search'></i>
            </button>
          </form>
        </div>
        <div className='settings'>
        </div>
      </div>
    </div>
    <div v-if="moviesData.length" class="container">
      <div class="row">
        <div v-for="movie in moviesData" :key="movie.IMDB_ID"
          :class="$store.state.displayMode === displayModes.list ? 'col-lg-12' : 'col-lg-4'">
          <MovieCard v-bind="movie" />
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped lang="scss">
.theme-dark {}

.TABLE {
  display: flex;
}
</style>
