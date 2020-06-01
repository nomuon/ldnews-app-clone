<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/common.scss";

body {
  margin: 0 auto;
  color: $text;
  background-color: $background-base;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic",
    Verdana, Meiryo, sans-serif;
}

#app {
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
}
</style>
