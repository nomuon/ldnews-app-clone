<template>
  <div class="search-bar">
    <img
      v-if="backBtn"
      src="@/assets/back.png"
      alt=""
      @click="back"
      class="back"
    />
    <input
      v-model="searchQuery"
      @keydown.enter="enterEvent"
      type="text"
      placeholder="検索"
      :class="`search-bar-input ${backBtn ? 'search-bar-input-with-back' : ''}`"
    />

    <span v-if="hasText" @click="clear" class="clear"></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export type KeydownEvent = {
  keyCode: number;
};

export default Vue.extend({
  name: "SearchBar",
  props: {
    keyword: {
      type: String,
      default: ""
    },
    backBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchQuery: ""
    };
  },
  computed: {
    hasText(): boolean {
      const len: number = this.searchQuery.length;
      return len > 0;
    }
  },
  created() {
    this.searchQuery = this.keyword;
  },
  methods: {
    doSearch(): void {
      const query = this.searchQuery;
      this.$router.push(`/search/${query}`);
    },
    enterEvent(event: KeydownEvent): void {
      if (event.keyCode == 13) {
        this.doSearch();
      }
    },
    clear(): void {
      this.searchQuery = "";
    },
    back(): void {
      this.$router.go(-1);
    }
  }
});
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  padding: 10px 20px;
  background-color: #ffffff;

  .back {
    width: 20px;
    margin-left: -10px;
    margin-right: 10px;
    vertical-align: middle;
  }

  &-input {
    width: calc(100% - 50px);
    padding: 5px 10px 5px 40px;
    font-size: 0.85em;
    line-height: 1.8;
    background-color: #f3f4f4;
    background-image: url(../assets/search.png);
    background-repeat: no-repeat;
    background-position: center left 10px;
    background-size: 15px;
    border: none;
    border-radius: 10px;
  }

  &-input-with-back {
    width: calc(100% - 70px) !important;
    vertical-align: middle;
  }

  .clear {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 15px;
    height: 15px;
    background-image: url(../assets/clear.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 15px;
  }
}
</style>
