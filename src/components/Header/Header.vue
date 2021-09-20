<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="logo" />
    </div>

    <ul class="menu">
      <li>Box Office</li>
      <li>Media</li>
      <li>Society</li>
      <li>Ratings</li>
      <li>DVD & Blu-Ray</li>
    </ul>

    <div class="search">
      <input
        v-if="input"
        @blur="input = false"
        class="search-input"
        type="text"
      />
      <img
        @click="input = !input"
        class="search-img"
        src="@/assets/img/icon-search.svg"
        alt="icon-search"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      input: false,
    };
  },
};
</script>

<style lang="scss">
@import "Header.scss";
</style>