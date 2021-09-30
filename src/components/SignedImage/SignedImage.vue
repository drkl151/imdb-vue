<template>
  <div class="signed-image">
    <div class="signed-image__img">
      <img :src="img" :alt="title" />
    </div>
    <h2 class="signed-image__title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      requared: true,
    },
    title: {
      type: String,
      requared: true,
    },
  },
};
</script>

<style lang="scss">
@import "SignedImage.scss";
</style>