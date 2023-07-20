import { describe, it, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import MovieCard from '../../components/MovieCard.vue'
import MoviePage from '../../components/MoviePage.vue'
import Home from '../../Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Vuex from 'vuex'

const routes = [
   { path: '/', redirect: '/movies' },
   { path: '/movies', component: Home },
   { path: '/movies/:movieId', component: MoviePage }
]

const props = {
   TITLE: 'Title test',
   IMDB_ID: '123id',
   RANK: 30,
   ACTORS: 'Actor1, Actor2',
   AKA: 'Title test 2',
   IMG_POSTER: 'poster url'
}

describe('MovieCard', () => {
   let actions
   let store

   beforeEach(() => {
      actions = {
         setDarkTheme: vi.fn(),
         setLightTheme: vi.fn(),
         setDisplayModeList: vi.fn(),
         setDisplayModeTable: vi.fn()
      }

      store = new Vuex.Store({
         actions
      })
   })

   const router = createRouter({
      history: createWebHistory(),
      routes: routes,
   })

   it('should redirect on click', async () => {
      router.push('/')
      await router.isReady()
      const wrapper = mount(MovieCard, {
         props,
         global: {
            plugins: [store, router]
         },
      })
      await wrapper.find('a').trigger('click')
      await flushPromises()
      expect(router.options.history.location).toBe('/movies/' + props.IMDB_ID)
   })
})
