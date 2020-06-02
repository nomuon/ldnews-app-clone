<template>
  <div class="carousel">
    <ul>
      <li
        v-for="article in articles"
        :key="article.id"
        @click="pushArticleScreen(article.id)"
        class="carousel-list"
      >
        <img
          :src="
            article.thumbnailUrl !== null
              ? article.thumbnailUrl
              : article.venderImageUrl
          "
          alt=""
          :class="article.thumbnailUrl !== null ? 'thumbnail' : 'vender-image'"
        />
        <p>{{ article.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Article } from "../store/types";

export default Vue.extend({
  name: "Carousel",
  props: {
    articles: {
      type: Array as PropType<Array<Article>>,
      required: true
    }
  },
  methods: {
    pushArticleScreen(articleId: Article["id"]): void {
      const articlePath = `/article/${articleId}`;
      this.$router.push(articlePath);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";
.carousel {
  width: 100%;
  overflow-x: scroll;
  color: $text;

  margin-bottom: 10px;

  ul {
    width: 100%;
    margin: 0;
    padding: 10px;
    white-space: nowrap;

    li.carousel-list {
      display: inline-table;
      width: 120px;
      height: 180px;
      margin-right: 10px;
      padding: 0;
      font-size: 0.75em;
      color: $text;
      background-color: #ffffff;
      font-weight: bold;
      white-space: normal;
      border-radius: 4px;

      img {
        display: block;
        width: 150px;
        height: 100px;
        margin-bottom: 10px;
      }

      img.thumbnail {
        object-fit: cover;
        border-radius: 4px 4px 0 0;
      }

      img.vender-image {
        object-fit: contain;
      }

      p {
        margin: 0;
        padding: 0 10px;
        line-height: 1.7;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
}
</style>
