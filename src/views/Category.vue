<template>
  <div id="category">
    <NavigationBar :title="pageName" backBtn />

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
import NavigationBar from "@/components/NavigationBar.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import Drawer from "@/components/Drawer.vue";
import { Article } from "../store/types";

export default Vue.extend({
  name: "Category",
  components: {
    NavigationBar,
    ArticlesList,
    Drawer
  },
  data() {
    return {
      todayArticles: {} as Array<Article>,
      drawer: false,
      clickedArticle: {} as Article
    };
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
  computed: {
    pageName(): string {
      const params = this.$route.params.name;
      let page: string;

      switch (params) {
        case "dom":
          page = "国内";
          break;

        case "eco":
          page = "IT 経済";
          break;

        case "sports":
          page = "スポーツ";
          break;

        case "ent":
          page = "芸能";
          break;

        case "foreign":
          page = "海外";
          break;

        default:
          page = "";
          break;
      }

      return page;
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
@import "../assets/common.scss";

#category {
  background-color: $background-base;

  .articles-block {
    padding: 50px 0 30px;
  }
}
</style>
