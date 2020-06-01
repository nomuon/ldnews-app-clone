<template>
  <div id="favorite">
    <NavigationBar title="あとで読む" backBtn />
    <ArticlesList
      :articles="readLateredArticles"
      @readerClicked="openDrawer"
      class="articles-block"
    />

    <Drawer
      v-if="drawer"
      :article="clickedArticle"
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
import { Article, ReadLatersState } from "../store/types";

export default Vue.extend({
  name: "ReadLater",
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
    readLateredArticles(): ReadLatersState {
      return this.$store.getters["readLaters/all"];
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
#favorite {
  min-height: 100vh;
  background-color: #ffffff;

  .articles-block {
    padding: 50px 0 30px;
  }
}
</style>
