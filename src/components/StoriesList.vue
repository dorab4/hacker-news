<template>
  <div class="stories-list">
    <Spinner v-if="loading" />
    <StoryItem
      v-for="(story, index) in stories"
      :key="story.id"
      :story="story"
      :index="index"
    />
  </div>
</template>

<script>
import StoryItem from "../components/StoryItem.vue";
import { getNewestStories } from "@/services/StoryService";
import Spinner from "@/components/UI/Spinner.vue";

export default {
  components: {
    StoryItem,
    Spinner,
  },
  data() {
    return {
      stories: [],
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    this.stories = await getNewestStories();
    if (this.stories) this.loading = false;
    this.$store.dispatch("stories/setStories", this.stories);
  },
};
</script>
<style lang="scss" scoped>
.stories-list {
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
