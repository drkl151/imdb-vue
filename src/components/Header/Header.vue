<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="logo" />
    </div>

    <nav>
      <ul class="menu">
        <li>Box Office</li>
        <li>Media</li>
        <li>Society</li>
        <li>Ratings</li>
        <li>DVD & Blu-Ray</li>
      </ul>
    </nav>
    <div class="search">
      <q-input
        v-if="inputIsOpen"
        ref="searchInput"
        @blur="closeInput"
        autofocus
        color="black"
        filled
        v-model="searchText"
        label="Search"
      >
      </q-input>

      <img
        @click="checkInput"
        class="search__icon"
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
      searchText: "",
      inputIsOpen: false,
    };
  },

  methods: {
    checkInput() {
      if (!this.inputIsOpen) {
        this.inputIsOpen = true;
      }
    },
    closeInput() {
      if (!this.searchText) {
        setTimeout(() => {
          this.$refs.searchInput.$el.classList.add("remove-input");
        }, 0);

        setTimeout(() => {
          this.inputIsOpen = this.searchText ? true : false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss">
@import "Header.scss";
</style>