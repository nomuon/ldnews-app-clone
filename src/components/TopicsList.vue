<template>
  <ul class="topics">
    <li
      v-for="topic in topics"
      :key="topic.id"
      @click="pushArticleScreen(topic.id)"
      :class="`topics-list ${topic.topicType == 'headline' ? 'headline' : ''}`"
    >
      <div
        class="thumbnail"
        :style="
          `background-image: url(${
            topic.thumbnailUrl !== null
              ? topic.thumbnailUrl
              : topic.venderImageUrl
          });
          background-size: ${
            topic.thumbnailUrl !== null ? 'cover' : 'contain'
          };`
        "
      ></div>

      <span class="title">{{ topic.title }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type TopicType = "headline" | "topic";

export type Topics = {
  id: string;
  title: string;
  thumbnailUrl: string | null;
  venderImageUrl: string;
  topicType: TopicType;
};

export default Vue.extend({
  name: "TopicsList",
  props: {
    topics: {
      type: Array as PropType<Array<Topics>>,
      default: []
    }
  },
  methods: {
    pushArticleScreen(articleId: string): void {
      const articlePath = `/article/${articleId}`;
      this.$router.push(articlePath);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

.topics {
  margin: 0;
  padding: 0;
  background-color: #ffffff;

  .topics-list {
    width: calc(100% - 20px);
    height: 30px;
    padding: 5px 10px;
    list-style-type: none;
    border-bottom: 1px solid $line;

    .thumbnail {
      display: inline-block;
      vertical-align: middle;
      width: 48px;
      height: 30px;
      margin-right: 5px;
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 5px;
      border: 1px solid $line;
    }

    .title {
      display: inline-block;
      vertical-align: middle;
      width: calc(100% - 60px);
      font-size: 0.8em;
      color: #222222;
      font-weight: bolder;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:first-child {
      border-top: 1px solid $line;
    }
  }

  .headline {
    height: 75px !important;
    padding: 5px 10px !important;

    .thumbnail {
      width: 100px !important;
      height: 70px !important;
      margin-right: 10px !important;
    }

    .title {
      width: calc(100% - 115px) !important;
    }
  }
}
</style>
