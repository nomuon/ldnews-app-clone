<template>
  <div id="home">
    <HomeTab
      :tabs="tabs"
      :currentTabIndex="currentTabIndex"
      @selectTab="scrollTab"
    />

    <div class="main">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="tab"
          :id="`tab${index}`"
          :data-index="index"
          class="tab-screen"
        >
          <TopicsList :topics="todayTopics" class="topics-block" />

          <Carousel :articles="todayTopics" />

          <ArticlesList
            :articles="todayArticles"
            class="articles-block"
            @readerClicked="openDrawer"
          />
        </li>
      </ul>
    </div>

    <Drawer
      v-if="drawer"
      :article="clickedArticle"
      favorite
      readLater
      @closeClicked="closeDrawer"
    />

    <TabBar current="home" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeTab from "@/components/HomeTab.vue";
import TopicsList from "@/components/TopicsList.vue";
import ArticlesList from "@/components/ArticlesList.vue";
import Carousel from "@/components/Carousel.vue";
import TabBar from "@/components/TabBar.vue";
import Drawer from "@/components/Drawer.vue";
import { Article } from "@/store/types";

export default Vue.extend({
  name: "Home",
  components: {
    HomeTab,
    TopicsList,
    ArticlesList,
    Carousel,
    TabBar,
    Drawer
  },
  data() {
    return {
      tabs: ["Today", "国内", "海外", "IT 経済", "スポーツ", "芸能"],
      currentTabIndex: 0,
      todayTopics: [] as Array<Article>,
      todayArticles: [] as Array<Article>,
      drawer: false,
      clickedArticle: {} as Article
    };
  },
  async created() {
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
  mounted() {
    const tabs = document.querySelectorAll(".tab-screen");
    const observerRoot = document.querySelector(".main");
    const options = {
      root: observerRoot,
      rootMargin: "50px",
      threshold: 1
    };
    const observer = new IntersectionObserver(this.intersectedTab, options);
    tabs.forEach(tab => {
      observer.observe(tab);
    });
  },
  methods: {
    updateCurrentTab(index: number): void {
      this.currentTabIndex = index;
    },
    intersectedTab(elms: Array<IntersectionObserverEntry>): void {
      elms.forEach(elm => {
        if (elm.isIntersecting) {
          // FIXME: 型が分からない...
          // eslint-disable-next-line
          const target: Record<string, any> = elm.target;
          const index = Number(target.dataset.index);
          this.updateCurrentTab(index);
        }
      });
    },
    scrollTab(index: number): void {
      this.updateCurrentTab(index);
      const screenWidth = window.screen.width;
      const scrollAmount = screenWidth * index;
      const elm = document.getElementsByClassName("main")[0];
      elm.scrollLeft = scrollAmount;
      window.scrollTo({
        top: 0
      });
    },
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

#home {
  background-color: $background-base;

  .main {
    width: 100%;
    padding-top: 40px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    ul {
      white-space: nowrap;
      margin: 0;
      padding: 0;

      li.tab-screen {
        display: inline-block;
        width: 100%;
        height: 100%;
        scroll-snap-align: start;
        white-space: normal;

        .topics-block {
          width: 100%;
          margin-bottom: 10px;
        }

        .articles-block {
          width: 100%;
          padding-bottom: 70px;
        }
      }
    }
  }
}
</style>
