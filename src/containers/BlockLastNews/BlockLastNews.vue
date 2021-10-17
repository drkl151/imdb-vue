<template>
  <div class="block-last-news">
    <div class="block-last-news__header">
      <h2 class="g-component-header">Last News</h2>
      <ul class="news-categories-menu">
        <li
          @click="(e) => selectCategory(e)"
          :class="{ 'selected-news-category': categoryNews === 'top' }"
        >
          Top
        </li>
        <span class="decorative-trait">|</span>
        <li
          @click="(e) => selectCategory(e)"
          :class="{ 'selected-news-category': categoryNews === 'movies' }"
        >
          Movies
        </li>
        <span class="decorative-trait">|</span>
        <li
          @click="(e) => selectCategory(e)"
          :class="{ 'selected-news-category': categoryNews === 'tv' }"
        >
          TV
        </li>
        <span class="decorative-trait">|</span>
        <li
          @click="(e) => selectCategory(e)"
          :class="{ 'selected-news-category': categoryNews === 'celebs' }"
        >
          Celebs
        </li>
      </ul>
    </div>
    <div class="block-last-news__loader" v-if="isLoading">
      <Loader size="50px" />
    </div>

    <div v-else class="block-last-news__last-news">
      <LastNews
        v-for="news in displayNewsOnCurrentScreenSize"
        :key="news.id"
        :img="news.urlToImage"
        :title="news.title"
        :content="news.content"
      />
    </div>
  </div>
</template>

<script>
import LastNews from "@/components/LastNews/LastNews";
import Loader from "@/components/Loader/Loader";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  components: {
    LastNews,
    Loader,
  },

  methods: {
    ...mapActions(["GET_LAST_NEWS_FROM_API"]),

    selectCategory(e) {
      this.GET_LAST_NEWS_FROM_API(e.target.innerHTML.toLowerCase().trim());
    },
  },

  computed: {
    ...mapGetters({
      lastNews: "lastNews",
      categoryNews: "categoryNews",
      isLoading: "isLoading",
      screenSize: "screenSize",
    }),

    displayNewsOnCurrentScreenSize() {
      if (this.screenSize > 1395) {
        return this.lastNews.slice(0, 3);
      }
      if (this.screenSize < 1395 && this.screenSize > 1285) {
        return this.lastNews.slice(0, 6);
      }
      if (this.screenSize < 1090 && this.screenSize > 965) {
        return this.lastNews.slice(0, 4);
      }
       if (this.screenSize < 970 && this.screenSize > 0) {
        return this.lastNews.slice(0, 3);
      }
      return this.lastNews;
    },
  },

  mounted() {
    this.GET_LAST_NEWS_FROM_API("top");
  },
};
</script>

<style lang="scss">
@import "BlockLastNews.scss";
</style>