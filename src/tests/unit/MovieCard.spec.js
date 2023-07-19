import { flushPromises, mount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard'
import MoviePage from '@/components/MoviePage'
import Home from '@/Home'
import Vuex from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

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
         setDarkTheme: jest.fn(),
         setLightTheme: jest.fn(),
         setDisplayModeList: jest.fn(),
         setDisplayModeTable: jest.fn()
      }

      store = new Vuex.Store({
         actions
      })
   })

   const router = createRouter({
      history: createWebHistory(),
      routes: routes,
   })

   test('should redirect on click', async () => {
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