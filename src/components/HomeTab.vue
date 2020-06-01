<template>
  <div id="home-tab">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="tab"
        :class="currentTabIndex == index ? 'selected' : null"
        @click="selectTab(index)"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "HomeTab",
  props: {
    tabs: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    currentTabIndex: {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    selectTab(index: number): void {
      this.$emit("selectTab", index);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#home-tab {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  overflow-x: scroll;
  background-color: #ffffff;
  border-bottom: 3px solid $ld-blue;

  @media screen and (min-width: 415px) {
    overflow-x: auto !important;
  }

  ul {
    margin: 0;
    padding: 10px 0 0;
    white-space: nowrap;

    li {
      display: inline-block;
      height: 100%;
      padding: 6px 20px;
      font-size: 0.75em;
      color: $text;
      font-weight: bold;
      white-space: normal;
      border-radius: 4px 4px 0 0;
    }

    .selected {
      background-color: $ld-blue;
      color: #ffffff;
    }
  }
}
</style>
