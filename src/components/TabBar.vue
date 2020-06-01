<template>
  <div id="tab-bar">
    <div>
      <router-link to="/">
        <img
          src="@/assets/home.png"
          alt="home"
          :class="current == 'home' ? 'selected' : null"
        />
      </router-link>
    </div>
    <div>
      <router-link to="/search">
        <img
          src="@/assets/search.png"
          alt="home"
          :class="current == 'search' ? 'selected' : null"
        />
      </router-link>
    </div>
    <div>
      <router-link to="/notification">
        <img
          src="@/assets/notification.png"
          alt="home"
          :class="current == 'notification' ? 'selected' : null"
        />
      </router-link>
    </div>
    <div>
      <router-link to="/library">
        <img
          src="@/assets/library.png"
          alt="home"
          :class="current == 'library' ? 'selected' : null"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type Tab = "home" | "search" | "notification" | "library";

export default Vue.extend({
  name: "TabBar",
  props: {
    current: {
      type: String as PropType<Tab>,
      default: "home"
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: #ffffff;
  border-top: 1px solid $line;
  -webkit-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(1px 3px 5px rgba(0, 0, 0, 0.2));

  div {
    img {
      display: inline-block;
      max-width: 20px;
      filter: grayscale(100%);

      &.selected {
        filter: grayscale(0%);
      }
    }
  }
}
</style>
