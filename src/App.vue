<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { API_SEARCH_URL } from './constants/api-url'
import { formatData } from './helpers/format-data'
import { getLS } from './helpers/local-storage'
import localStorageKeys from './constants/local-storage-keys'
import { displayModes } from './constants/display-modes';
import { useStore } from 'vuex'

const store = useStore()
const searchTerm = ref('')
const moviesData = ref([])
const handleSearchSubmit = async (e) => {
  e.preventDefault()
  // setIsLoading(true)
  const { data } = await axios(API_SEARCH_URL + e.target[0].value)
  const res = formatData(data.description)
  searchTerm.value = ''
  moviesData.value = res
  // const formattedData = formatData(data.description)
  // setSearchResult(formattedData)
  // setIsLoading(false)
}
onMounted(() => {
  const lsDisplayMode = getLS(localStorageKeys.displayMode)
  if (lsDisplayMode) {
    if (lsDisplayMode === displayModes.list) {
      store.commit('setDisplayModeList')
    }
    if (lsDisplayMode === displayModes.table) {
      store.commit('setDisplayModeTable')
    }
  }

  const lsTheme = JSON.parse(getLS(localStorageKeys.theme))
  if (lsTheme) {
    if (lsTheme === true) {
      store.commit('setDarkTheme')
    }
    if (lsTheme === false) {
      store.commit('setLightTheme')
    }
  }
})
</script>

<template>
  <div id="wrapper" :class="$store.state.theme ? 'theme-dark' : 'theme-light'">
    <div id="inner-wrapper">
      <div>
        <button @click="$store.dispatch('setDarkTheme')"><i class="bi bi-moon"></i></button>
        <button @click="$store.dispatch('setLightTheme')"><i class="bi bi-sun"></i></button>
        <button @click="$store.dispatch('setDisplayModeList')"><i class="bi bi-list"></i></button>
        <button @click="$store.dispatch('setDisplayModeTable')"><i class="bi bi-table"></i></button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#wrapper {
  &.theme-dark {
    background-color: black;
  }

  &.theme-light {
    background-color: white;
  }
}
</style>
