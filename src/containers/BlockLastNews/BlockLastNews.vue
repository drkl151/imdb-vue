<template>
  <div class="block-last-news">
    <div class="block-last-news__header">
      <h2 class="g-component-header">Last News</h2>
      <ul class="news-categories-menu">
        <li :class="{'selected-news-category' : selectedNewsCategory.top}">Top</li>
        <span class="decorative-trait">|</span>

        <li @click="selectedNewsCategory.movies = true" :class="{'selected-news-category' : selectedNewsCategory.movies}">Movies</li>
        <span class="decorative-trait">|</span>
        <li :class="{'selected-news-category' : selectedNewsCategory.tv}">TV</li>
        <span class="decorative-trait">|</span>
        <li :class="{'selected-news-category' : selectedNewsCategory.celebs}">Celebs</li>
      </ul>
    </div>

    <LastNews
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedNewsCategory: {
        top: true,
        movies: false,
        tv: false,
        celebs: false,
      },
    };
  },
  watch: {
    selectedNewsCategory(){
      console.log(123);
    }
  },
  components: {
    LastNews,
  },

  methods: {
    ...mapActions(["GET_LAST_NEWS_FROM_API"]),
  },

  computed: {
    ...mapGetters({
      lastNews: "lastNews",
    }),
  },

  mounted() {
    this.GET_LAST_NEWS_FROM_API();
  },
};
</script>

<style lang="scss">
@import "BlockLastNews.scss";
</style>