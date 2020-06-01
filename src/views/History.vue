<template>
  <div id="history">
    <NavigationBar title="履歴" backBtn />
    <ArticlesList
      :articles="historyArticles"
      @readerClicked="openDrawer"
      class="articles-block"
    />

    <Drawer
      v-if="drawer"
      :article="clickedArticle"
      history
      favorite
      readLater
      @closeClicked="closeDrawer"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import Drawer from "@/components/Drawer.vue";
import { HistoriesState, Article } from "../store/types";

export default Vue.extend({
  name: "History",
  components: {
    NavigationBar,
    ArticlesList,
    Drawer
  },
  data() {
    return {
      drawer: false,
      clickedArticle: {} as Article
    };
  },
  computed: {
    historyArticles(): HistoriesState {
      return this.$store.getters["histories/all"];
    }
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
#history {
  min-height: 100vh;
  background-color: #ffffff;

  .articles-block {
    padding: 50px 0 30px;
  }
}
</style>
