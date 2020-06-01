<template>
  <div id="library">
    <NavigationBar title="ライブラリ" />

    <ul class="main">
      <li
        v-for="item in items"
        :key="item.title"
        @click="pushScreen(item.link)"
        class="library-list"
        :style="`background-image: url(${item.icon});`"
      >
        {{ item.title }}
      </li>
    </ul>

    <TabBar current="library" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import TabBar from "@/components/TabBar.vue";

export default Vue.extend({
  name: "Library",
  components: {
    NavigationBar,
    TabBar
  },
  data() {
    return {
      items: [
        {
          title: "履歴",
          icon: require("@/assets/history.png"),
          link: "/library/history"
        },
        {
          title: "お気に入り",
          icon: require("@/assets/favorite.png"),
          link: "/library/favorite"
        },
        {
          title: "あとで読む",
          icon: require("@/assets/read-later.png"),
          link: "/library/read-later"
        }
        // {
        //   title: "設定",
        //   icon: require("@/assets/setting.png"),
        //   link: "/library/setting"
        // }
      ]
    };
  },
  methods: {
    pushScreen(path: string): void {
      this.$router.push(path);
    }
  }
});
</script>

<style lang="scss" scoped>
#library {
  min-height: 100vh;
  background-color: #ffffff;

  ul.main {
    padding: 70px 25px 0;
    font-size: 0.95em;
    font-weight: 500;
    list-style-type: none;

    .library-list {
      margin-bottom: 30px;
      padding-left: 50px;
      background-repeat: no-repeat;
      background-position: center left;
      background-size: contain;
    }
  }
}
</style>
