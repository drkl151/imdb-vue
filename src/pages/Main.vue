<template>
  <div>
    <Header />
    <!-- <MoviePoster
      v-for="film in modifiedMoviesPlayingNow"
      :key="film.imdb_id"
      :title="film.title"
      :genre="film.genre_ids"
      :img="film.poster_path"
    /> -->

    <!-- <MoviePosterSlider /> -->

    <!-- 
    <SideHeader title="NOW PLAYING" backgroundColor="#2998e2" />
    <SideHeader title="TRAILERS" backgroundColor="#EA4737" /> -->
    <BlockTodaysWallpaper/>
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import SideHeader from "@/components/SideHeader/SideHeader";
import MoviePoster from "@/components/MoviePoster/MoviePoster";
import MoviePosterSlider from "@/containers/MoviePosterSlider/MoviePosterSlider";
import TodaysWallpaper from "@/components/TodaysWallpaper/TodaysWallpaper";
import BlockTodaysWallpaper from "@/containers/BlockTodaysWallpaper/BlockTodaysWallpaper";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      modifiedMoviesPlayingNow: [],
    };
  },

  components: {
    Header,
    MoviePoster,
    SideHeader,
    MoviePosterSlider,
    TodaysWallpaper,
    BlockTodaysWallpaper,
  },

  methods: {
    ...mapActions([
      "GET_FILMS_FROM_API",
      "GET_GENRE_FILMS_FROM_API",
    ]),
  },

  mounted() {
    this.GET_FILMS_FROM_API();
    this.GET_GENRE_FILMS_FROM_API();
  },

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
@import "@/styles/pages/Main.scss";
</style>