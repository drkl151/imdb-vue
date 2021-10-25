<template>
  <div class="movie-poster-slider">
    <Splide :options="optionsSplide">
      <SplideSlide v-for="film in modifiedMoviesPlayingNow" :key="film.imdb_id">
        <MoviePoster
          :title="film.title"
          :genre="film.genre_ids"
          :img="film.poster_path"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { mapGetters, mapMutations } from "vuex";
import MoviePoster from "@/components/MoviePoster/MoviePoster";

export default {
  data() {
    return {
      modifiedMoviesPlayingNow: [],
      optionsSplide: {
        rewind: true,
        type: "loop",
        perPage: 7,
        perMove: 4,
        arrowPath: "M0 0V26L11 13L0 0Z",
        pagination: 0,


        breakpoints: {
           1500: {
            perPage: 6,
            perMove: 4,
          },
           1330: {
            perPage: 5,
            perMove: 5,
          },
          1100: {
            perPage: 4,
            perMove: 4,
          },

           920: {
            perPage: 3,
            perMove: 3,
          },
        },
      },
    };
  },

  components: { MoviePoster, Splide, SplideSlide },

  watch: {
    genres() {
      this.modifiedMoviesPlayingNow = this.moviesPlayingNow.map((movie) => {
        const modifiedGenres = movie.genre_ids.map(
          (id) => this.genres.filter((genre) => genre.id === id)[0].name
        );
        return { ...movie, genre_ids: modifiedGenres };
      });
    },
  },

  computed: {
    ...mapGetters({
      moviesPlayingNow: "moviesPlayingNow",
      genres: "genres",
    }),
  },
};
</script>

<style lang="scss">
@import "MoviePosterSlider.scss";
</style>