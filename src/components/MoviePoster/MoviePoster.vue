<template>
  <div class="movie-poster">
    <img class="movie-poster__movie-img" :src="`http://image.tmdb.org/t/p/w300${img}`" :alt="title" />
    <div class="information-block">
      <div class="information-block__text-info">
        <img
          src="../../assets/img/icon-information.svg"
          alt="icon-information"
        />
        <p>Information</p>
      </div>
    </div>
    <div class="linear-gradient-block">
      <div class="text-block">
        <h2 class="text-block__movie-title">{{ title }}</h2>
        <p class="text-block__movie-genre">{{ mainGenres }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },

  computed: {
    mainGenres() {
      return this.genre.slice(0, 3).join(", ");
    },
  },
};
</script>

<style lang="scss">
@import "MoviePoster.scss";
</style>