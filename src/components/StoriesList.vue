<template>
  <div class="stories-list">
    <Spinner v-if="loading" />
    <StoryItem
      v-else
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
  async mounted() {
    this.loading = true;
    this.stories = await getNewestStories();
    if (this.stories) this.loading = false;
  },
};
</script>
<style lang="scss" scoped>
.stories-list {
  margin: 80px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
