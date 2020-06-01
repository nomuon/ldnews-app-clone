<template>
  <ul class="keywords">
    <li
      v-for="keyword in keywords"
      :key="keyword.text"
      @click="doSearch(keyword.text)"
      class="keywords-list"
    >
      <div class="text">{{ keyword.text }}</div>

      <div
        class="thumbnail"
        :style="`background-image: url(${keyword.thumbnailUrl});`"
      ></div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type Keyword = {
  text: string;
  thumbnailUrl: string;
};

export default Vue.extend({
  name: "KeywordsList",
  props: {
    keywords: {
      type: Array as PropType<Array<Keyword> | null>,
      default: null
    }
  },
  methods: {
    doSearch(query: string): void {
      this.$router.push(`/search/${query}`);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

.keywords {
  margin: 0;
  padding: 0;
  background-color: #ffffff;

  &-list {
    width: calc(100% - 40px);
    height: 62px;
    padding: 5px 20px;
    list-style-type: none;
    border-bottom: 1px solid $line;

    .text {
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 102px);
      margin-right: 10px;
      font-size: 0.85em;
      font-weight: bold;
    }

    .thumbnail {
      display: inline-block;
      vertical-align: middle;
      width: 90px;
      height: 60px;
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 5px;
      border: 1px solid $line;
    }
  }
}
</style>
