<template>
  <ul class="articles">
    <li
      v-for="article in articles"
      :key="article.id"
      @click="pushArticleScreen(article.id)"
      class="articles-list"
    >
      <div
        class="thumbnail"
        :style="
          `background-image: url(${
            article.thumbnailUrl !== null
              ? article.thumbnailUrl
              : article.venderImageUrl
          });
          background-size: ${
            article.thumbnailUrl !== null ? 'cover' : 'contain'
          };`
        "
      ></div>

      <div class="right-block">
        <p class="title">{{ article.title }}</p>
        <div class="grid">
          <p class="vender-name">{{ article.venderName }}</p>
          <div
            v-if="!withoutReader"
            class="reader"
            @click.stop="clickReader(article)"
          >
            ･･･
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Article } from "@/store/types";

export default Vue.extend({
  name: "ArticlesList",
  props: {
    articles: {
      type: Array as PropType<Array<Article>>,
      required: true
    },
    withoutReader: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    pushArticleScreen(articleId: Article["id"]): void {
      const articlePath = `/article/${articleId}`;
      this.$router.push(articlePath);
    },
    clickReader(article: Article): void {
      this.$emit("readerClicked", article);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

.articles {
  // width: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;

  &-list {
    position: relative;
    width: calc(100% - 20px);
    height: 75px;
    padding: 5px 10px;
    list-style-type: none;
    border-bottom: 1px solid $line;

    .thumbnail {
      display: inline-block;
      vertical-align: middle;
      width: 100px;
      height: 70px;
      margin-right: 10px;
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 5px;
      border: 1px solid $line;
    }

    .right-block {
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 120px);

      p.title {
        margin: 0 0 10px;
        font-size: 0.8em;
        color: #222222;
        font-weight: bolder;
        line-height: 1.5;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }

      .grid {
        position: absolute;
        bottom: 5px;
        width: calc(100% - 150px);
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 20px;
        grid-template-rows: 10px;
        align-items: center;

        .vender-name {
          font-size: 0.65em;
          color: $pale-text;
        }

        .reader {
          font-size: 1em;
          color: $pale-text;
          z-index: 2;
        }
      }
    }

    &:first-child {
      border-top: 1px solid $line;
    }
  }
}
</style>
