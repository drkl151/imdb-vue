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
    trimmedContent() {
      return this.content.substring(0, 102) + "...";
    },
    trimmedTitle() {
      return this.title.substring(0, 57) + "...";
    },
  },
};
</script>

<style lang="scss">
@import "LastNews.scss";
</style>