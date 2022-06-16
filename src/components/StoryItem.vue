<template>
  <a :href="story.url" target="blank" class="story">
    <div class="story-container">
      <img :src="require(`@/assets/images/img-${index + 1}.jpg`)" alt="" />
      <div class="content">
        <div class="story-title">{{ story.title }}</div>
        <div class="story-information">
          <div class="story-author">
            <User />
            <div class="author-title">
              {{ story.by.id }}({{ story.by.karma }})
            </div>
          </div>
          <div class="story-published-date">
            <Calendar />
            <div class="date">{{ story.time }}</div>
          </div>
          <div class="story-score">
            <Score />
            <div class="score">
              {{ story.score }}
            </div>
          </div>
        </div>
        <p class="excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
    </div>
  </a>
</template>
<script>
import User from "@/assets/icons/user.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Score from "@/assets/icons/star.svg";
export default {
  components: {
    User,
    Calendar,
    Score,
  },
  props: {
    story: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.story {
  display: block;
  padding: 16px;
  margin-bottom: 16px;
}

.story-container {
  display: flex;
}

.content {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.story-title {
  font-weight: bold;
  font-size: 32px;
  line-height: 1.1;
  margin-bottom: 16px;
}

.story-information {
  display: flex;

  > * {
    display: flex;
    align-items: center;
  }

  > * + * {
    margin-left: 24px;
  }
}

.excerpt {
  line-height: 1.3;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  flex: 1;
  max-width: 80%;
}

img {
  height: 100%;
  max-height: 200px;
  width: auto;
}

svg {
  width: 20px;
  margin-right: 4px;
}
</style>
