<template>
  <div class="block-signed-image">
    <div class="block-signed-image__header">
      <h2 class="header__title g-component-header">{{ title }}</h2>
      <a class="g-redirect-link-text" href="#">{{ redirectLink }}</a>
    </div>
    <div class="wrapper-signed-image">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requared: true,
    },
    redirectLink: { type: String, requared: true },
  },
};
</script>

<style lang="scss">
@import "BlockSignedImage.scss";
</style>