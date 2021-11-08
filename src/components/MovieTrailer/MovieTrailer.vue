<template>
  <div class="movie-trailer-wrapper">
    <div class="movie-trailer" @click="movieTrailerOn = true">
      <iframe v-if="movieTrailerOn" width="100%" height="100%"
      :src="`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`" />

      <div
        class="movie-trailer__poster"
        v-else
        :style="{
          backgroundImage: `url(http://image.tmdb.org/t/p/w1280${backgroundImage})`,
          backgroundSize: 'cover',
        }"
      >
        <div class="poster__play">
          <img
            class="play__img"
            src="../../assets/img/icon-play.svg"
            alt="icon-play"
          />
        </div>

        <div class="poster__text">
          <h3 class="text__title">
            {{ title }}
            <p class="text__year">({{ year }})</p>
          </h3>
        </div>

        <div class="linear-gradient-block"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieTrailerOn: false,
    };
  },

  props: {
    videoKey: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    backgroundImage: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "MovieTrailer.scss";
</style>