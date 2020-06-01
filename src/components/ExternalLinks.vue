<template>
  <ul v-if="links !== undefined" class="external-links">
    <li v-for="link in links" :key="link.title" @click="openUrl(link.url)">
      {{ link.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type ExternalLink = {
  title: string;
  url: string;
};

export default Vue.extend({
  name: "ExternalLinks",
  props: {
    links: {
      type: Array as PropType<Array<ExternalLink> | null>,
      default: null
    }
  },
  methods: {
    openUrl(url: string): void {
      location.href = url;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

ul.external-links {
  margin: 0;
  padding: 0;

  li {
    padding: 7px 10px;
    list-style-type: none;
    font-size: 0.8em;
    color: $link-color;
    line-height: 1.8;
    border-top: 1px solid $line;

    &:last-child {
      border-bottom: 1px solid $line;
    }
  }
}
</style>
