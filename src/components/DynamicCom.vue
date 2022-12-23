<script>
  import getPopularMovies from "../api/getPopularMovies";
   import MovieCard from "./MovieCard.vue";
  import { onMounted } from "vue";

  export default {
    components: { MovieCard },
    setup() {
      const { popularMovies, loadPopularMovies } = getPopularMovies();

      onMounted(() => {
        loadPopularMovies();
        //loadGenres();
      });

      return { popularMovies};
    },
  };
</script>

<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
      <h2
        class="pb-6 text-lg font-semibold tracking-wider uppercase p dark:text-myyellow"
      >
        Popular Movies
      </h2>
  
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div
          class="mt-3"
          v-for="popularMovie in popularMovies"
          :key="popularMovie.id"
        >
          <MovieCard
            :movie="popularMovie"            
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
