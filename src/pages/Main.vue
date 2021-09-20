<template>
  <div>
    <Header />
  </div>
</template>


<script>
import Header from "@/components/Header/Header";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { Header },

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