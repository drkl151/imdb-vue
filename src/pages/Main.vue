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
    <MoviePosterSlider />
    <SideHeader title="NOW PLAYING" backgroundColor="#2998e2" />
    <SideHeader title="TRAILERS" backgroundColor="#EA4737" />
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import MoviePoster from "@/components/MoviePoster/MoviePoster";
import SideHeader from "@/components/SideHeader/SideHeader";
import MoviePosterSlider from "@/containers/MoviePosterSlider/MoviePosterSlider";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { Header, MoviePoster, SideHeader, MoviePosterSlider },

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