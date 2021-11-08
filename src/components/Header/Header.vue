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
        v-model="valueSearchInput"
        label="Search"
        v-debounce:600ms="getSearchResults"
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
import { mapActions, mapGetters } from "vuex";
import { getDirective } from "vue-debounce";

export default {
  data() {
    return {
      valueSearchInput: "",
      inputIsOpen: false,
    };
  },

  methods: {
    ...mapActions(["GET_SEARCH_RESULTS_FROM_API"]),

    checkInput() {
      if (!this.inputIsOpen) {
        this.inputIsOpen = true;
      }
    },

    closeInput() {
      if (!this.valueSearchInput) {
        setTimeout(() => {
          this.$refs.searchInput.$el.classList.add("remove-input");
        }, 0);

        setTimeout(() => {
          this.inputIsOpen = this.valueSearchInput ? true : false;
        }, 500);
      }
    },

    getSearchResults() {
      this.GET_SEARCH_RESULTS_FROM_API(this.valueSearchInput);
    },
  },

  computed: {
    ...mapGetters({ searchResults: "searchResults" }),
  },
};
</script>

<style lang="scss">
@import "Header.scss";
</style>