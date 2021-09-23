<template>
  <div>
    <Header />
    <SideHeader title="NOW PLAYING" backgroundColor="#2998e2" />
    <SideHeader title="TRAILERS" backgroundColor="#EA4737" />
    <!-- <MovieInformationBlock
      v-for="film in films"
      :key="film.id"
      :title="film.title"
      :genre="film.genre"
      :img="film.img"
    /> -->
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import MovieInformationBlock from "@/components/MovieInformationBlock/MovieInformationBlock";
import SideHeader from "@/components/SideHeader/SideHeader";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { Header, MovieInformationBlock, SideHeader },

  methods: {
    ...mapMutations({
      changeFilm: "changeFilm",
    }),
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