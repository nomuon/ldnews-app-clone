<template>
  <div id="search-result">
    <SearchBar :keyword="searchedKeyword" backBtn />

    <ArticlesList
      :articles="todayArticles"
      @readerClicked="openDrawer"
      class="articles-block"
    />

    <Drawer
      v-if="drawer"
      :article="clickedArticle"
      favorite
      readLater
      @closeClicked="closeDrawer"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SearchBar from "@/components/SearchBar.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import Drawer from "@/components/Drawer.vue";
import { Article } from "../store/types";

export default Vue.extend({
  name: "SearchResult",
  components: {
    SearchBar,
    ArticlesList,
    Drawer
  },
  data() {
    return {
      todayArticles: [] as Array<Article>,
      drawer: false,
      clickedArticle: {} as Article
    };
  },
  computed: {
    searchedKeyword(): string {
      const kw = this.$route.params.keyword;
      return kw;
    }
  },
  async created() {
    this.todayArticles = await fetch("/data/todayArticles.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        return json.articles;
      });
  },
  methods: {
    openDrawer(article: Article): void {
      this.clickedArticle = article;
      this.drawer = true;
    },
    closeDrawer(): void {
      this.drawer = false;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#search-result {
  background-color: $background-base;

  .articles-block {
    padding-bottom: 30px;
  }
}
</style>
