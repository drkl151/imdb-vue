<template>
  <div class="movie-poster-slider">
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        padding
        arrows
        height="370px"
        class="bg-grey-1 shadow-2 rounded-borders"
        
      >
        <q-carousel-slide
          v-for="film in films"
          :key="film.id"
          :name="film.id"
          class="column no-wrap"
          :maxIndex='4'
        >
          <div
            class="
              row
              fit
              justify-start
              items-center
              q-gutter-xs q-col-gutter
              no-wrap
            "
          >
            <MoviePoster
              :title="film.title"
              :genre="film.genre"
              :img="film.img"
            />
          </div>
        </q-carousel-slide>

      </q-carousel>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MoviePoster from "@/components/MoviePoster/MoviePoster";
export default {
  data() {
    return { slide: 1 };
  },
  components: { MoviePoster },
  computed: {
    ...mapGetters({
      films: "films",
    }),
  },
};
</script>

<style lang="scss">
@import "MoviePosterSlider.scss";
</style>