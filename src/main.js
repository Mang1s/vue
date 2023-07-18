import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createRouter, createWebHistory } from 'vue-router'
import MoviePage from './components/MoviePage.vue'
import Home from './Home.vue'
import { store } from './store'

const routes = [
   { path: '/', redirect: '/movies' },
   { path: '/movies', component: Home },
   { path: '/movies/:movieId', component: MoviePage }
 ]
 
 const router = createRouter({
   history: createWebHistory(),
   routes,
 })

const app = createApp(App)
// app.config.devtools = true
app.use(router)
app.use(store)
app.mount('#app')
