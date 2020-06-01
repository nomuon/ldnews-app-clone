<template>
  <div id="drawer">
    <div id="drawer-list">
      <ul class="main">
        <li v-if="history" @click="removeHistory" class="drawer-list history">
          履歴から削除
        </li>
        <li
          v-if="favorite"
          @click="updateFavorite(article, isFavorite)"
          class="drawer-list favorite"
        >
          {{ isFavorite ? "お気に入りから削除" : "お気に入りに追加" }}
        </li>
        <li
          v-if="readLater"
          @click="updateReadLater(article, isReadLater)"
          class="drawer-list read-later"
        >
          {{ isReadLater ? "あとで読むから削除" : "あとで読むに追加" }}
        </li>
        <li @click="close" class="drawer-list cancel">キャンセル</li>
      </ul>
    </div>

    <div @click="close" class="back-fill"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Article } from "../store/types";
import {
  checkIsFavorite,
  updateFavorite,
  checkIsReadLater,
  updateReadLater,
  removeHistory
} from "@/utils/articleStore";

export default Vue.extend({
  name: "Drawer",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    },
    favorite: {
      type: Boolean,
      default: false
    },
    readLater: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isFavorite(): boolean {
      return checkIsFavorite(this.article.id);
    },
    isReadLater(): boolean {
      return checkIsReadLater(this.article.id);
    }
  },
  methods: {
    close(): void {
      this.$emit("closeClicked");
    },
    updateFavorite(article: Article, isFavorite: boolean) {
      updateFavorite(article, isFavorite);
      this.close();
    },
    updateReadLater(article: Article, isReadLater: boolean) {
      updateReadLater(article, isReadLater);
      this.close();
    },
    removeHistory(article: Article) {
      removeHistory(article);
      this.close();
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#drawer {
  &-list {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    background-color: #ffffff;

    ul.main {
      padding: 15px 25px;
      font-size: 0.85em;
      font-weight: 500;
      list-style-type: none;

      li.drawer-list {
        margin-bottom: 30px;
        padding-left: 50px;
        background-repeat: no-repeat;
        background-position: center left;
        background-size: contain;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .history {
        background-image: url("../assets/history.png");
      }

      .favorite {
        background-image: url("../assets/favorite.png");
      }

      .read-later {
        background-image: url("../assets/read-later.png");
      }

      .cancel {
        color: $pale-text;
      }
    }
  }

  .back-fill {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #555555;
    z-index: 1000;
    opacity: 0.3;
  }
}
</style>
