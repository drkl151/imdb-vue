<template>
  <div>
    <Header />
    <!-- <MoviePoster
      v-for="film in films"
      :key="film.id"
      :title="film.title"
      :genre="film.genre"
      :img="film.img"
    /> -->
    <!-- <MoviePosterSlider /> -->
    <TodaysWallpaper
      backgroundImg="https://i0.wp.com/itc.ua/wp-content/uploads/2016/07/Stranger_Things_i03.jpg?fit=770%2C546&quality=100&strip=all&ssl=1"
      titleMovie="Stranger Things"
    />
    <SideHeader title="NOW PLAYING" backgroundColor="#2998e2" />
    <SideHeader title="TRAILERS" backgroundColor="#EA4737" />
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import SideHeader from "@/components/SideHeader/SideHeader";
import MoviePoster from "@/components/MoviePoster/MoviePoster";
import MoviePosterSlider from "@/containers/MoviePosterSlider/MoviePosterSlider";
import TodaysWallpaper from "@/components/TodaysWallpaper/TodaysWallpaper";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Header,
    MoviePoster,
    SideHeader,
    MoviePosterSlider,
    TodaysWallpaper,
  },

  computed: {
    ...mapGetters({
      films: "films",
    }),
  },
};
</script>

<style lang="scss">
@import "@/styles/pages/Main.scss";
</style>