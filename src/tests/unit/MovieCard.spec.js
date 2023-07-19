import { shallowMount } from '@vue/test-utils'
import MovieCard from '@/MovieCard'

test('test', () => {
   const wrapper = shallowMount(MovieCard)
   console.log(wrapper);
})