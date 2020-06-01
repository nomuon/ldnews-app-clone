<template>
  <div id="earthquake">
    <NavigationBar title="お知らせ" backBtn />

    <h1>{{ title }}</h1>

    <img
      v-if="thumbnailUrl !== ''"
      :src="thumbnailUrl"
      alt=""
      class="eyecatch-image"
    />

    <p class="body">{{ body }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

export type Information = {
  title: string;
  thumbnailUrl: string;
  body: string;
};

export default Vue.extend({
  name: "Information",
  components: {
    NavigationBar
  },
  data() {
    return {
      title: "",
      thumbnailUrl: "",
      body: ""
    };
  },
  created() {
    const params = this.$route.params as Information;
    this.title = params.title;
    this.thumbnailUrl = params.thumbnailUrl;
    this.body = params.body;
  }
});
</script>

<style lang="scss" scoped>
#earthquake {
  min-height: 100vh;
  background-color: #ffffff;

  h1 {
    margin: 0 0 10px;
    padding: 70px 20px 0;
    font-size: 1.1em;
    line-height: 1.5;
  }

  img.eyecatch-image {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .body {
    margin: 0 0 20px;
    padding: 0 20px;
    font-size: 0.9em;
    line-height: 1.8;
  }
}
</style>
