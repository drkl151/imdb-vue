<template>
  <div
    class="todays-wallpaper"
    :style="{
      background: backgroundTodaysWallpaper,
    }"
  >
    <h2 class="todays-wallpaper__text">{{titleMovie}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
  
    };
  },
  computed: {
    backgroundTodaysWallpaper() {
      return ` linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.0001) 37.41%,
          rgba(23, 23, 23, 0.917403) 100%
        ), url(${this.backgroundImg})`;
    },
  },
  props: {
    backgroundImg: {
      type: String,
      requaired: true,
    },
    titleMovie: {
      type: String,
      requaired: true,
    },
  },
};
</script>

<style lang="scss">
@import "TodaysWallpaper.scss";
</style>