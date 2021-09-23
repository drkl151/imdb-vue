<template>
  <div class="side-header" :style="{ backgroundColor }">
    <h3 class="side-header__text">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "SideHeader.scss";
</style>