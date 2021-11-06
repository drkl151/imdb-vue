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
          {{
            popularMovie.title.length > 23 && screenSize < 580
              ? popularMovie.title.substring(0, 14) + "..."
              : popularMovie.title.length > 18
              ? popularMovie.title.substring(0, 18) + "..."
              : popularMovie.title
          }}
        </h3>
        <ul>
          <li>
            <p class="characteristic-name">year</p>
            <p class="characteristic">
              {{ popularMovie.detalis.release_date.slice(0, 4) }}
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
              {{
                popularMovie.detalis.production_companies[0].name.length > 17
                  ? popularMovie.detalis.production_companies[0].name.slice(
                      0,
                      17
                    ) + "..."
                  : popularMovie.detalis.production_companies[0].name
              }}
            </p>
          </li>
          <li>
            <p class="characteristic-name">geners</p>
            <p
              class="characteristic genre"
              :style="{
                borderLeft: `3px solid ${getColorGenre(
                  popularMovie.detalis.genres[0].name.toLowerCase()
                )}`,
              }"
            >
              {{
                screenSize < 530
                  ? popularMovie.detalis.genres[0].name
                      .toLowerCase()
                      .slice(0, 6) + "..."
                  : screenSize < 1130 && screenSize > 863
                  ? popularMovie.detalis.genres[0].name
                      .toLowerCase()
                      .slice(0, 6) + "..."
                  : popularMovie.detalis.genres[0].name.toLowerCase()
              }}
            </p>
            <p
              class="characteristic genre"
              :style="{
                borderLeft: `3px solid ${getColorGenre(
                  popularMovie.detalis.genres[1].name.toLowerCase()
                )}`,
              }"
            >
              {{
                screenSize < 530
                  ? popularMovie.detalis.genres[1].name
                      .toLowerCase()
                      .slice(0, 6) + "..."
                  : screenSize < 1130 && screenSize > 863
                  ? popularMovie.detalis.genres[1].name
                      .toLowerCase()
                      .slice(0, 6) + "..."
                  : popularMovie.detalis.genres[1].name.toLowerCase()
              }}
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
        {{
          popularMovie.overview.length > 380
            ? popularMovie.overview.substring(0, 380) + "..."
            : popularMovie.overview
        }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    popularMovie: {
      type: Object,
      reqared: true,
    },
  },

  computed: {
    ...mapGetters({
      screenSize: "screenSize",
    }),
  },

  methods: {
    getColorGenre(genre) {
      let colorGenre = "";

      switch (genre) {
        case "action":
          colorGenre = "#ea4737";
          break;
        case "animation":
          colorGenre = "#39fccb";
          break;
        case "adventure":
          colorGenre = "#93e24a";
          break;
        case "drama":
          colorGenre = "#772cd8";
          break;
        case "comedy":
          colorGenre = "#d8b82c";
          break;
        case "fantasy":
          colorGenre = "#d82c6e";
          break;
        case "thriller":
          colorGenre = "#2998e2";
          break;
        case "war":
          colorGenre = "#222cb4";
          break;
        case "western":
          colorGenre = "#1c25a5";
          break;
        case "science fiction":
          colorGenre = "#008d5e";
          break;
        case "crime":
          colorGenre = "#af4f00";
          break;
        case "music":
          colorGenre = "#8f0388";
          break;
        case "romance":
          colorGenre = "#ff1eda";
          break;
        default:
          colorGenre = "#ea4737";
      }

      return colorGenre;
    },
  },
};
</script>

<style lang="scss">
@import "MovieTrailerInformation.scss";
</style>