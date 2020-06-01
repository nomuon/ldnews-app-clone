<template>
  <div id="article">
    <NavigationBar
      backBtn
      article
      :favorited="isFavorite"
      @clickFavorite="updateFavorite(content, isFavorite)"
    />

    <h1>{{ content.title }}</h1>
    <div class="info">
      <span class="datetime">{{ content.updateDatetime }}</span>
      <span class="vender-image">
        <img :src="content.venderImageUrl" :alt="content.venderName" />
      </span>
    </div>

    <img
      v-if="content.thumbnailUrl !== null"
      :src="content.thumbnailUrl"
      alt=""
      class="eyecatch-image"
    />

    <Zakkuri :zakkuri="content.summaries" class="zakkuri-block" />

    <div v-html="content.body" class="body"></div>

    <h2>外部リンク</h2>
    <ExternalLinks
      :links="content.externalLinks"
      class="external-block"
    ></ExternalLinks>

    <h2>おすすめニュース</h2>
    <TopicsList :topics="todayTopics" class="topics-block" />

    <h2>関連記事</h2>
    <ArticlesList
      :articles="todayArticles"
      withoutReader
      class="articles-block"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Zakkuri from "@/components/Zakkuri.vue";
import ExternalLinks from "@/components/ExternalLinks.vue";
import TopicsList from "@/components/TopicsList.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { Article } from "../store/types";
import {
  addHistory,
  checkIsFavorite,
  updateFavorite
} from "@/utils/articleStore";

type Summaries = Array<string> | Array<null>;

type ExternalLink = {
  title: string;
  url: string;
};

type ExternalLinks = Array<ExternalLink>;

export type Content = {
  id: string;
  title: string;
  updateDatetime: string;
  venderName: string;
  venderImageUrl: string;
  thumbnailUrl: string;
  body: string;
  summaries: Summaries;
  externalLinks: ExternalLinks;
};

export default Vue.extend({
  name: "Article",
  components: {
    NavigationBar,
    Zakkuri,
    ExternalLinks,
    TopicsList,
    ArticlesList
  },
  data() {
    return {
      content: {} as Content,
      todayTopics: [] as Array<Article>,
      todayArticles: [] as Array<Article>,
      isFavorite: false
    };
  },
  computed: {
    favorites(): Array<Article> {
      return this.$store.getters["favorites/all"];
    }
  },
  async created() {
    this.content = await fetch("/data/article.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        return json.content;
      });
    this.isFavorite = checkIsFavorite(this.content.id);
    addHistory(this.content);
    this.todayTopics = await fetch("/data/todayTopics.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        return json.articles;
      });

    this.todayArticles = await fetch("/data/todayArticles.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        return json.articles;
      });
  },
  methods: {
    updateFavorite(content: Content, isFavorite: boolean): void {
      // FIXME: これでいいのだろうか...
      updateFavorite(content, isFavorite);
    }
  },
  watch: {
    favorites() {
      this.isFavorite = checkIsFavorite(this.content.id);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#article {
  background-color: #ffffff;

  h1 {
    margin: 0 0 10px;
    padding: 70px 20px 0;
    font-size: 1.1em;
    line-height: 1.5;
  }

  h2 {
    margin: 0 0 10px;
    padding: 0 10px;
    font-size: 1em;
  }

  div.info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;

    .datetime {
      display: inline-block;
      padding-left: 20px;
      vertical-align: middle;
      text-align: left;
      font-size: 0.65em;
      color: $pale-text;
    }

    .vender-image {
      display: inline-block;
      padding-right: 20px;
      text-align: right;

      img {
        height: 16px;
        vertical-align: top;
      }
    }
  }

  img.eyecatch-image {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .zakkuri {
    margin-bottom: 40px;
  }

  .body {
    margin-bottom: 20px;
    padding: 0 20px;
    font-size: 0.9em;
    line-height: 1.8;
  }

  .external-block {
    margin-bottom: 20px;
  }

  .topics-block {
    margin-bottom: 20px;
  }
}
</style>
