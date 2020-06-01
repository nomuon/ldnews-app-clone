<template>
  <div id="favorite">
    <NavigationBar title="お気に入り" backBtn />
    <ArticlesList
      :articles="favoritedArticles"
      @readerClicked="openDrawer"
      class="articles-block"
    />

    <Drawer
      v-if="drawer"
      :article="clickedArticle"
      favorite
      @closeClicked="closeDrawer"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import Drawer from "@/components/Drawer.vue";
import { FavoritesState, Article } from "../store/types";

export default Vue.extend({
  name: "Favorite",
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
    favoritedArticles(): FavoritesState {
      return this.$store.getters["favorites/all"];
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
