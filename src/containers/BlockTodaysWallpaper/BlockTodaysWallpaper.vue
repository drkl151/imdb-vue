<template>
  <div class="block-todays-wallpaper">
    <h2 class="g-component-header block-todays-wallpaper__title">
      Today's wallpapers
    </h2>
    <div class="block-todays-wallpaper__todays-wallpaper">
    <TodaysWallpaper
      v-for="todaysWallpaper in mainTodaysWalpaper"
      :key="todaysWallpaper.id"
      :backgroundImg="todaysWallpaper.backdrop_path"
      :titleMovie="todaysWallpaper.title"
    />
    </div>
  </div>
</template>

<script>
import TodaysWallpaper from "@/components/TodaysWallpaper/TodaysWallpaper";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    TodaysWallpaper,
  },

  methods: {
    ...mapActions(["GET_TODAYS_WALLPAPERS_FROM_API"]),
  },

  computed: {
    ...mapGetters({
      todaysWallpapers: "todaysWallpapers",
    }),

    mainTodaysWalpaper() {
      return this.todaysWallpapers.slice(0, 3);
    },
  },

  mounted() {
    this.GET_TODAYS_WALLPAPERS_FROM_API();
  },
};
</script>

<style lang="scss">
@import "BlockTodaysWallpaper.scss";
</style>