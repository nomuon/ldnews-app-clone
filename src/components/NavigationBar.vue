<template>
  <div id="navi" :class="article ? 'navi-article' : 'navi-normal'">
    <template v-if="article">
      <img src="@/assets/back.png" alt="" @click="back" />
      <img
        src="@/assets/favorite.png"
        alt=""
        @click="clickFavorite"
        :class="{ favorited: favorited }"
      />
      <img src="@/assets/share.png" alt="" />
    </template>

    <template v-else>
      <span v-if="backBtn" @click="back" class="back-btn"></span>
      <span class="title">{{ title }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "NavigationBar",
  props: {
    article: {
      type: Boolean,
      default: false
    },
    favorited: {
      type: Boolean,
      default: false
    },
    backBtn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String as PropType<string | null>,
      default: null
    }
  },
  methods: {
    back(): void {
      this.$router.go(-1);
    },
    clickFavorite(): void {
      this.$emit("clickFavorite");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#navi {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #fbfbfb;
  border-bottom: 1px solid $line;
}

.navi-article {
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: 1fr 50px 50px;
  align-items: center;

  img {
    width: 20px;
    padding: 5px;
  }

  .favorited {
    filter: invert(85%) sepia(12%) saturate(3100%) hue-rotate(183deg)
      brightness(100%) contrast(120%);
  }
}

.navi-normal {
  position: relative;

  .back-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    padding: 5px;
    background-image: url(../assets/back.png);
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 20px;
  }

  .title {
    font-size: 0.9em;
    font-weight: bold;
    line-height: 3.5;
  }
}
</style>
