<template>
  <div>
    <Header />
    <MovieInformationBlock
      v-for="film in films"
      :key="film.id"
      :title="film.title"
      :genre="film.genre"
      :img="film.img"
    />
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import MovieInformationBlock from "@/components/MovieInformationBlock/MovieInformationBlock";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { Header, MovieInformationBlock },

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