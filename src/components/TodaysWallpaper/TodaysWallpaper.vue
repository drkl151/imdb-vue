<template>
  <div
    class="todays-wallpaper"
    :style="{
      background: `url(http://image.tmdb.org/t/p/w1280${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: '0 -25px',
    }"
  >
    <div class="todays-wallpaper__linear-gradient"></div>
    <h2 class="todays-wallpaper__text">{{ titleMovie }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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