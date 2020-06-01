<template>
  <div id="search">
    <SearchBar />

    <h1>話題のキーワード</h1>
    <KeywordsList :keywords="keywords" />

    <h1>カテゴリ</h1>
    <ListBox :list="categories" />

    <TabBar current="search" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "@/components/SearchBar.vue";
import KeywordsList, { Keyword } from "@/components/KeywordsList.vue";
import ListBox from "@/components/ListBox.vue";
import TabBar from "@/components/TabBar.vue";

export default Vue.extend({
  name: "Search",
  components: {
    SearchBar,
    KeywordsList,
    ListBox,
    TabBar
  },
  data() {
    return {
      keywords: [] as Array<Keyword>,
      categories: [
        { text: "国内", link: "/category/dom" },
        { text: "IT 経済", link: "/category/eco" },
        { text: "スポーツ", link: "/category/sports" },
        { text: "芸能", link: "/category/ent" },
        { text: "海外", link: "/category/foreign" }
      ]
    };
  },
  async created() {
    this.keywords = await fetch("/data/keywords.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        return json.keywords;
      });
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#search {
  min-height: 100vh;
  background-color: #ffffff;

  h1 {
    margin: 0;
    padding: 20px;
    font-size: 0.9em;
    font-weight: bold;
    border-top: 1px solid $line;
    border-bottom: 1px solid $line;
  }
}
</style>
