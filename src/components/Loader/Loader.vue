<template>
  <div class="loader">
    <q-spinner-dots color="black" :size="size" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "Loader.scss";
</style>