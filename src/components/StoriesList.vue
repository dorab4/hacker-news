<template>
  <div class="stories-list">
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
export default {
  components: {
    StoryItem,
  },
  data() {
    return {
      stories: [],
    };
  },

  mounted() {
    this.getNewestStories();
  },

  methods: {
    getMultipleRandom(arr, num) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());

      return shuffled.slice(0, num);
    },

    async getUserFromUsername(username) {
      const user = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${username}.json`
      ).then((res) => res.json());
      return user;
    },

    async getStoryFromID(id) {
      const story = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      ).then((res) => res.json());
      const user = await this.getUserFromUsername(story.by);
      story.by = user;
      if (story) {
        this.stories.push(story);
        return story;
      }
      return "no story";
    },

    async getNewestStories() {
      // fetch returns response, parse it to json
      const data = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      ).then((res) => res.json());
      const random10 = this.getMultipleRandom(data, 10);
      // const stories;
      for (const id of random10) {
        const story = await this.getStoryFromID(id);
        console.log(story);
        //stories.push(story);
      }
      // this.stories = stories;
    },
  },
};
</script>
<style lang="scss" scoped>
.stories-list {
  margin: 80px 0;
}
</style>
