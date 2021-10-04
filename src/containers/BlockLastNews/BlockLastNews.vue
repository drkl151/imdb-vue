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
    <div class="block-last-news__loader" v-if="isLoading"><Loader size="50px" /></div>
    <LastNews
      v-else
      v-for="news in lastNews"
      :key="news.id"
      :img="news.urlToImage"
      :title="news.title"
      :content="news.content"
    />
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
    }),
  },

  mounted() {
    this.GET_LAST_NEWS_FROM_API("top");
  },
};
</script>

<style lang="scss">
@import "BlockLastNews.scss";
</style>