<template>
  <router-view />
   <Splide :options="{ rewind: true }">
    <SplideSlide>
      <p>hi</p>
    </SplideSlide>
    <SplideSlide>
      <p>bye</p>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';


export default {
  components: {
    Splide,
    SplideSlide,
  }
};
</script>

<style lang="scss">
@import "@/styles/global/general.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Abel", "Abhaya Libre";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
