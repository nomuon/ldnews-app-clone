<template>
  <ul class="notifications">
    <li
      v-for="item in items"
      :key="item.id"
      @click="pushNotificationScreen(item)"
      class="notifications-list"
    >
      <div
        v-if="item.thumbnailUrl !== null"
        class="thumbnail"
        :style="
          `background-image: url(${
            item.thumbnailUrl !== null ? item.thumbnailUrl : null
          });`
        "
      ></div>

      <div :class="item.thumbnailUrl !== null ? 'right-block' : 'both-block'">
        <p class="notification-type">
          {{ item.notificationType | transformType }}
        </p>
        <p class="title">{{ item.title }}</p>
        <p class="public-datetime">
          {{ item.publicDatetime | formatDatetimeDiff }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export type notificationType = "earthquake" | "digest" | "information";

export type Notification = {
  id: string;
  notificationType: notificationType;
  title: string;
  thumbnailUrl: string | null;
  publicDatetime: Date;
  body?: string;
};

export default Vue.extend({
  name: "NotificationsList",
  props: {
    items: {
      type: Array as PropType<Array<Notification>>
    }
  },
  methods: {
    pushNotificationScreen(item: Notification): void {
      if (item.notificationType == "digest") {
        this.$router.push(`/article/${item.id}`);
      } else {
        const title = item.title;
        const thumbnailUrl =
          item.thumbnailUrl !== null ? item.thumbnailUrl : "";
        const body = item.body as string;

        this.$router.push({
          path: `/notification/${item.notificationType}`,
          name: `${
            item.notificationType == "earthquake" ? "Earthquake" : "Information"
          }`,
          params: {
            title,
            thumbnailUrl,
            body
          }
        });
      }
    }
  },
  filters: {
    transformType: function(val: notificationType): string {
      let displayed = "";
      switch (val) {
        case "earthquake":
          displayed = "地震情報";
          break;

        case "digest":
          displayed = "速報";
          break;

        case "information":
          displayed = "お知らせ";
          break;
      }
      return displayed;
    },
    formatDatetimeDiff: function(val: Date): string {
      const now = new Date().getTime();
      const publicDatetime = new Date(val).getTime();
      const diff = now - publicDatetime;

      if (diff < 60000) {
        const second = diff / 1000;
        const int = Math.ceil(second);
        return `${int}秒前`;
      } else if (diff < 3600000) {
        const minute = diff / 60000;
        const int = Math.ceil(minute);
        return `${int}分前`;
      } else if (diff < 86400000) {
        const hour = diff / 3600000;
        const int = Math.ceil(hour);
        return `${int}時間前`;
      } else {
        const day = diff / 86400000;
        const int = Math.ceil(day);
        return `${int}日前`;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

.notifications {
  margin: 0;
  padding: 0;
  background-color: #ffffff;

  &-list {
    width: calc(100% - 40px);
    padding: 5px 20px;
    list-style-type: none;
    border-bottom: 1px solid $line;

    .thumbnail {
      display: inline-block;
      vertical-align: middle;
      width: 120px;
      height: 80px;
      margin-right: 10px;
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      border-radius: 5px;
      border: 1px solid $line;
    }

    .right-block {
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 140px);
    }

    .both-block {
      width: calc(100% - 140px);
      padding: 5px 0;
    }

    .notification-type {
      margin: 0;
      font-size: 0.7em;
      color: #838383;
    }

    .title {
      margin: 0 0 5px;
      font-size: 0.85em;
      color: #222222;
      font-weight: bolder;
      line-height: 1.5;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    .public-datetime {
      margin: 0;
      font-size: 0.6em;
      color: $pale-text;
    }

    &:first-child {
      border-top: 1px solid $line;
    }
  }
}
</style>
