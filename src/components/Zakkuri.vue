<template>
  <div v-if="zakkuri !== null" class="zakkuri">
    <div class="zakkuri-top">
      <span class="baloon">ざっくり言うと</span>
      <span></span>
      <span class="copy">by livedoorNEWS</span>
    </div>

    <ul>
      <li v-for="item in zakkuri" :key="item">
        <span class="text">{{ item }}</span>
      </li>
    </ul>

    <div class="zakkuri-bottom"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
export default Vue.extend({
  name: "Zakkuri",
  props: {
    zakkuri: {
      type: Array as PropType<Array<string> | null>,
      default: null
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

.zakkuri {
  padding: 0 20px;

  &-top {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    position: relative;

    &:before {
      position: absolute;
      top: 30%;
      content: "";
      border-top: solid 1px $line;
      width: 100%;
      height: 1px;
      z-index: 0;
    }

    span {
      display: inline-block;
      justify-items: center;
      align-items: center;
      margin-bottom: 20px;
      background-color: #ffffff;
      z-index: 1;

      &:nth-child(2) {
        width: 10px;
      }
    }

    .baloon {
      position: relative;
      padding: 5px 10px;
      background-color: $ld-blue;
      font-size: 0.7em;
      color: #ffffff;
      font-weight: bold;
      border-radius: 3px;

      &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border: 6px solid transparent;
        border-top: 10px solid $ld-blue;
      }
    }

    .copy {
      padding-left: 10px;
      font-size: 0.6em;
      color: $line;
      line-height: 2.6;
    }
  }

  ul {
    margin: 0 0 20px;
    padding: 0;
    list-style-type: none;

    li {
      margin-bottom: 10px;
      padding-left: 30px;
      background-image: url("../assets/zakkuri.png");
      background-repeat: no-repeat;
      background-position: top 4px left;
      background-size: 15px;
      font-size: 0.85em;
      line-height: 1.8;
    }
  }

  &-bottom {
    position: relative;

    &:before {
      position: absolute;
      top: 50%;
      content: "";
      border-top: solid 1px $line;
      width: 100%;
      height: 1px;
    }
  }
}
</style>
