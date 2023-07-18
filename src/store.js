import { createStore } from "vuex"
import { displayModes } from "./constants/display-modes"
import { setLS } from "./helpers/local-storage"
import localStorageKeys from "./constants/local-storage-keys"

export const store = createStore({
  state() {
    return {
      theme: false,
      displayMode: displayModes.list
    }
  },
  mutations: {
    setDarkTheme(state) {
      state.theme = true
    },
    setLightTheme(state) {
      state.theme = false
    },
    setDisplayModeList(state) {
      state.displayMode = displayModes.list
    },
    setDisplayModeTable(state) {
      state.displayMode = displayModes.table
    }
  },
  actions: {
    setDarkTheme(context) {
      context.commit('setDarkTheme')
      setLS(localStorageKeys.theme, true)
    },
    setLightTheme(context) {
      context.commit('setLightTheme')
      setLS(localStorageKeys.theme, false)
    },
    setDisplayModeList(context) {
      context.commit('setDisplayModeList')
      setLS(localStorageKeys.displayMode, displayModes.list)
    },
    setDisplayModeTable(context) {
      context.commit('setDisplayModeTable')
      setLS(localStorageKeys.displayMode, displayModes.table)
    }
  }
})