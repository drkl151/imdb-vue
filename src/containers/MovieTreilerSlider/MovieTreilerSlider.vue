<template>
  <div class="movie-treiler-slider">
    <Splide :options="optionsSplide">
      <SplideSlide v-for="popularMovie in popularMovies" :key="popularMovie.id">
        <Loader
          class="movie-treiler-loader"
          :size="40"
          v-if="loaderPopularMovies"
        />
        <div v-else class="movie-treiler-slider__slide">
          <MovieTrailerInformation :popularMovie="popularMovie" />
          <MovieTrailer
            :videoKey="popularMovie.trailers[0].key"
            :title="popularMovie.title"
            :backgroundImage="popularMovie.backdrop_path"
            :year="popularMovie.detalis.release_date.slice(0, 4)"
          />
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import MovieTrailer from "@/components/MovieTrailer/MovieTrailer";
import MovieTrailerInformation from "@/components/MovieTrailerInformation/MovieTrailerInformation";

export default {
  data() {
    return {
      optionsSplide: {
        rewind: true,
        type: "loop",
        arrowPath: "M0 0V26L11 13L0 0Z",
        pagination: true,
      },
    };
  },

  components: { MovieTrailer, MovieTrailerInformation, Splide, SplideSlide },

  methods: {
    ...mapActions(["GET_POPULAR_MOVIES_FROM_API"]),
  },

  mounted() {
    this.GET_POPULAR_MOVIES_FROM_API();
  },

  computed: {
    ...mapGetters({
      popularMovies: "popularMovies",
      currentMovieId: "currentMovieId",
      loaderPopularMovies: "loaderPopularMovies",

    }),
  },
};
</script>

<style lang="scss">
@import "MovieTreilerSlider.scss";
</style>