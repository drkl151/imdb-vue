<template>
  <div>
    <q-btn @click="changeFilm('21312')" round class="btn" glossy icon="local_grocery_store" />
    <p>{{ films }}</p>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
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