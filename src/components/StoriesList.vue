<template>
  <div class="stories-list">
    <!-- skeleton loader -->
    <div class="skeleton" v-if="loading">
      <SkeletonLoader v-for="(n, index) in 10" :key="index" />
    </div>
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
import { getFinalStories } from "@/services/StoryService";
import SkeletonLoader from "@/components/UI/SkeletonLoader.vue";

export default {
  components: {
    StoryItem,
    SkeletonLoader,
  },
  data() {
    return {
      stories: [],
      loading: true,
    };
  },
  async created() {
    this.loading = true;
    this.stories = await getFinalStories();
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

  @include res("tab-p") {
    margin-top: 80px;
  }
}

.skeleton {
  width: 100%;
}
</style>
