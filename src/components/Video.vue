<template>
  <div>
  
    <button @click="handleClick">toggle</button>
    <span v-if="isToggled">
      hidden message
    </span>
    <ul v-for="(item, index) in movieList" :key="index">
      <li 
      :title="item.title"
      :overview="item.movieOverView"
      :moviePost="item.moviePost"
      >
          {{ title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const getPopularMovies = () => {
  const movie = ref({});
  const movieImages = ref([]);
  const movieVideo = ref({})
  const error = ref("");
  //const loading = ref(false);

  //loading.value = true;
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d2bb40d5b45665c9a72ed5938162a943&language=ko-KR')
      .then(res => {
        movieVideo.value = res.data.videos.results[0]
        movie.value = res.data;
        movieImages.value = res.data.images.backdrops.slice(0, 9);        
        console.log(res.data.videos.results[0])
      }).catch(err => {
        error.value = err.message;
        //loading.value = false;
      });

  return { movie, movieImages, movieVideo};

}
getPopularMovies();
//export default getPopularMovies;
</script>