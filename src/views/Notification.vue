<template>
  <div id="notification">
    <NavigationBar title="通知" />

    <div class="main">
      <NotificationsList :items="notifications" />
    </div>

    <TabBar current="notification" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationBar from "@/components/NavigationBar.vue";
import NotificationsList, {
  Notification
} from "@/components/NotificationsList.vue";
import TabBar from "@/components/TabBar.vue";

export default Vue.extend({
  name: "notification",
  components: {
    NavigationBar,
    NotificationsList,
    TabBar
  },
  data() {
    return {
      notifications: [] as Array<Notification>
    };
  },
  async created() {
    this.notifications = await fetch("/data/notifications.json")
      .then(res => {
        return res.json();
      })
      .then(json => {
        return json.notifications;
      });
  }
});
</script>

<style lang="scss" scoped>
#notification {
  min-height: 100vh;
  background-color: #ffffff;

  .main {
    padding-top: 50px;
  }
}
</style>
