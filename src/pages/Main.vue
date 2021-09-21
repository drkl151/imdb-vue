<template>
  <div>
    <Header />
    <MovieInformationBlock />
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
      films: "film",
    }),
  },
};
</script>

<style lang="scss">
@import "@/styles/pages/Main.scss";
</style>