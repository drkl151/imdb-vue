<template>
  <div class="movie-trailer-information">
    <div class="movie-trailer-information__main-information">
      <div class="main-information__img">
        <img
          :src="`http://image.tmdb.org/t/p/w1280${popularMovie.poster_path}`"
          :alt="popularMovie.title"
        />
      </div>

      <div class="main-information__text-information">
        <h3 class="main-information__title">
          {{ calculateTitle }}
        </h3>
        <ul>
          <li>
            <p class="characteristic-name">year</p>
            <p class="characteristic">
              {{ calculateYear }}
            </p>
          </li>
          <li>
            <p class="characteristic-name">contry</p>
            <p class="characteristic">
              {{ popularMovie.detalis.production_countries[0].iso_3166_1 }}
            </p>
          </li>
          <li>
            <p class="characteristic-name">director</p>
            <p class="characteristic">
              {{ calculateDirector }}
            </p>
          </li>
          <li>
            <p class="characteristic-name">geners</p>
            <p
              class="characteristic genre"
              :style="{
                borderLeft: `3px solid ${getColor(
                  popularMovie.detalis.genres[0].name.toLowerCase()
                )}`,
              }"
            >
              {{ calculateFirstGenre }}
            </p>
            <p
              class="characteristic genre"
              :style="{
                borderLeft: `3px solid ${getColor(
                  popularMovie.detalis.genres[1].name.toLowerCase()
                )}`,
              }"
            >
              {{ calculateSecondGenre }}
            </p>
          </li>
          <li>
            <p class="characteristic-name">budget</p>
            <p class="characteristic">${{ popularMovie.detalis.budget }}</p>
          </li>
          <li>
            <p class="characteristic-name">duration</p>
            <p class="characteristic">{{ popularMovie.detalis.runtime }} min</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="description">
      <p>
        {{ calculateDescription }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import getColorGenre from "@/utils/getColorGenre";

export default {
  props: {
    popularMovie: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      screenSize: "screenSize",
    }),

    calculateTitle() {
      return this.popularMovie.title.length > 23 && this.screenSize < 580
        ? this.popularMovie.title.substring(0, 14) + "..."
        : this.popularMovie.title.length > 18
        ? this.popularMovie.title.substring(0, 18) + "..."
        : this.popularMovie.title;
    },

    calculateYear() {
      return this.popularMovie.detalis.release_date.slice(0, 4);
    },

    calculateDirector() {
      return this.popularMovie.detalis.production_companies[0].name.length > 17
        ? this.popularMovie.detalis.production_companies[0].name.slice(0, 17) +
            "..."
        : this.popularMovie.detalis.production_companies[0].name;
    },

    calculateFirstGenre() {
      return this.screenSize < 530
        ? this.popularMovie.detalis.genres[0].name.toLowerCase().slice(0, 6) +
            "..."
        : this.screenSize < 1130 && this.screenSize > 863
        ? this.popularMovie.detalis.genres[0].name.toLowerCase().slice(0, 6) +
          "..."
        : this.popularMovie.detalis.genres[0].name.toLowerCase();
    },

    calculateSecondGenre() {
      return this.screenSize < 530
        ? this.popularMovie.detalis.genres[1].name.toLowerCase().slice(0, 6) +
            "..."
        : this.screenSize < 1130 && this.screenSize > 863
        ? this.popularMovie.detalis.genres[1].name.toLowerCase().slice(0, 6) +
          "..."
        : this.popularMovie.detalis.genres[1].name.toLowerCase();
    },

    calculateDescription() {
      return this.popularMovie.overview.length > 380
        ? this.popularMovie.overview.substring(0, 380) + "..."
        : this.popularMovie.overview;
    },
  },

  methods: {
    getColor(genre) {
      return getColorGenre(genre);
    },
  },
};
</script>

<style lang="scss">
@import "MovieTrailerInformation.scss";
</style>