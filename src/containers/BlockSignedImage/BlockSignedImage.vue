<template>
  <div class="block-signed-image">
    <div class="block-signed-image__header">
      <h2 class="header__title g-component-header">{{ title }}</h2>
      <a class="header__redirect-link g-redirect-link-text" href="#">{{ redirectLink }}</a>
    </div>
    <div class="block-signed-image__signed-image">
      <SignedImage
        v-for="dataObject in dataArray"
        :key="dataObject.id"
        :title="dataObject.name || dataObject.title"
        :img="`http://image.tmdb.org/t/p/w300${dataObject.profile_path || dataObject.poster_path}`"
      />
    </div>
  </div>
</template>

<script>
import SignedImage from "@/components/SignedImage/SignedImage";

export default {
  components: {
    SignedImage,
  },

  props: {
    title: {
      type: String,
      requared: true,
    },
    redirectLink: { type: String, requared: true },
    dataArray: { type: Array, requared: true },
  },
};
</script>

<style lang="scss">
@import "BlockSignedImage.scss";
</style>