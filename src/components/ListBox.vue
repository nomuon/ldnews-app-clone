<template>
  <ul class="list-box">
    <li
      v-for="item in list"
      :key="item.text"
      @click="pushScreen(item.link)"
      :class="`list ${item.link !== undefined ? 'link' : ''}`"
    >
      {{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type List = {
  text: string;
  link?: string;
};

export default Vue.extend({
  name: "ListBox",
  props: {
    list: {
      type: Array as PropType<Array<List> | null>,
      default: null
    }
  },
  methods: {
    pushScreen(link: string | undefined): void {
      if (link !== undefined) {
        this.$router.push(link);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

.list-box {
  margin: 0;
  padding: 0;
  background-color: #ffffff;

  .list {
    padding: 12px 20px;
    font-size: 0.85em;
    font-weight: bold;
    list-style-type: none;
    border-bottom: 1px solid $line;
  }

  .link {
    background-image: url(../assets/go.png);
    background-repeat: no-repeat;
    background-position: center right 20px;
    background-size: 12px;
  }
}
</style>
