<template>
    <div class="movie-card">
        <div class="movieThumb">
            <div class="movieInfo">
                <h2>{{ movie["title"] }}</h2>
                <div class="description">{{ movie["overview"] }}</div>
                <img src="" alt="">
            </div>
        </div>    
    </div>
</template>
<script>
  export default {
    props: ["movie"],
  };
</script>
<style></style>