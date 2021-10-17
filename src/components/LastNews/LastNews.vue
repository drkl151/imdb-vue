<template>
  <div class="last-news">
    <div class="last-news__img">
      <img :src="img" :alt="title" />
    </div>
    <div class="last-news__text">
      <h2 class="text__title">{{ trimmedTitle }}</h2>
      <p>
        {{ trimmedContent }}
        <a class="g-redirect-link-text" href="#">See more</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters(["screenSize"]),

    trimmedContent() {
      const contentScreenSize =
        this.screenSize < 869 && this.screenSize > 650
          ? this.content.split("… [+").slice(0, 1).join("") + "..."
          : this.content.substring(0, 102) + "...";
      return contentScreenSize;
    },
    trimmedTitle() {
      const contentScreenSize =
        this.screenSize < 869 && this.screenSize > 650
          ? this.content.split(" ").slice(0, 10).join(" ") + "..."
          : this.title.substring(0, 57) + "...";
      return contentScreenSize;
    },
  },
};
</script>

<style lang="scss">
@import "LastNews.scss";
</style>