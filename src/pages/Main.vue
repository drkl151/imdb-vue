<template>
  <div class="main">
    {{ screenSize }}
    <!-- <Header /> -->

    <div class="content">
      <div class="block-now-playing">
        <SideHeader title="NOW PLAYING" backgroundColor="#2998e2" />
        <MoviePosterSlider />
      </div>

      <div class="block-treilers">
        <SideHeader title="TRAILERS" backgroundColor="#EA4737" />
        <MovieTrailerSlider />
      </div>

      <!-- <div class="block-with-components">
        <BlockLastNews />

        <div class="blocks-signed-image">
          <BlockSignedImage
            title="Popular actors"
            redirectLink="Sea all actors"
            :dataArray="displayPopularActorOnCurrentScreenSize"
          />
          <BlockSignedImage
            title="Popular TV shows"
            redirectLink="Sea all"
            :dataArray="displayPopularMovieOnCurrentScreenSize"
          />
        </div>

        <BlockTodaysWallpaper />
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import SideHeader from "@/components/SideHeader/SideHeader";
import MoviePosterSlider from "@/containers/MoviePosterSlider/MoviePosterSlider";
import TodaysWallpaper from "@/components/TodaysWallpaper/TodaysWallpaper";
import BlockTodaysWallpaper from "@/containers/BlockTodaysWallpaper/BlockTodaysWallpaper";
import BlockSignedImage from "@/containers/BlockSignedImage/BlockSignedImage";
import BlockLastNews from "@/containers/BlockLastNews/BlockLastNews";
import MovieTrailerSlider from "@/containers/MovieTrailerSlider/MovieTrailerSlider";

import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    Header,
    SideHeader,
    MoviePosterSlider,
    MovieTrailerSlider,
    TodaysWallpaper,
    BlockTodaysWallpaper,
    BlockSignedImage,
    BlockLastNews,
  },

  methods: {
    ...mapActions([
      "GET_FILMS_FROM_API",
      "GET_GENRE_FILMS_FROM_API",
      "GET_POPULAR_ACTORS_FROM_API",
    ]),

    ...mapMutations(["SET_CURRENT_SCREEN_SIZE_TO_STATE"]),

    getScreenSize() {
      this.SET_CURRENT_SCREEN_SIZE_TO_STATE(
        document.documentElement.clientWidth
      );
    },
  },

  mounted() {
    this.SET_CURRENT_SCREEN_SIZE_TO_STATE(document.documentElement.clientWidth);

    this.$nextTick(function() {
      window.addEventListener("resize", this.getScreenSize);
    });

    this.GET_FILMS_FROM_API();
    this.GET_GENRE_FILMS_FROM_API();
    this.GET_POPULAR_ACTORS_FROM_API();
  },

  destroyed() {
    window.removeEventListener("resize", this.getScreenSize);
  },

  computed: {
    ...mapGetters({
      moviesPlayingNow: "moviesPlayingNow",
      genres: "genres",
      popularActors: "popularActors",
      screenSize: "screenSize",
      popularMovies: "popularMovies",
    }),

    displayPopularActorOnCurrentScreenSize() {
      if (
        this.screenSize > 1395 ||
        (this.screenSize < 860 && this.screenSize > 560)
      ) {
        return this.popularActors.slice(0, 5);
      }
      if (this.screenSize < 1295 && this.screenSize > 1190) {
        return this.popularActors.slice(0, 9);
      }
      if (this.screenSize < 1195 && this.screenSize > 1100) {
        return this.popularActors.slice(0, 8);
      }
      if (this.screenSize < 1105 && this.screenSize > 1000) {
        return this.popularActors.slice(0, 7);
      }
      if (this.screenSize < 1005 && this.screenSize > 855) {
        return this.popularActors.slice(0, 6);
      }
      if (this.screenSize < 860 && this.screenSize > 0) {
        return this.popularActors.slice(0, 4);
      }
      return this.popularActors;
    },

    displayPopularMovieOnCurrentScreenSize() {
      if (
        this.screenSize > 1395 ||
        (this.screenSize < 860 && this.screenSize > 560)
      ) {
        return this.modifiedMoviesPlayingNow.slice(0, 5);
      }
      if (this.screenSize < 1295 && this.screenSize > 1190) {
        return this.modifiedMoviesPlayingNow.slice(0, 9);
      }
      if (this.screenSize < 1195 && this.screenSize > 1100) {
        return this.modifiedMoviesPlayingNow.slice(0, 8);
      }
      if (this.screenSize < 1105 && this.screenSize > 1000) {
        return this.modifiedMoviesPlayingNow.slice(0, 7);
      }
      if (this.screenSize < 1005 && this.screenSize > 855) {
        return this.modifiedMoviesPlayingNow.slice(0, 6);
      }
      if (this.screenSize < 560 && this.screenSize > 0) {
        return this.modifiedMoviesPlayingNow.slice(0, 4);
      }
      return this.modifiedMoviesPlayingNow.slice(0, 10);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/pages/Main.scss";
</style>
