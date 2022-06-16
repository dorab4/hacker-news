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
              {{ story.by.id }} ( <span class="author-score"><Score /></span
              >{{ story.by.karma }})
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
      type: Object || Number,
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
  margin-bottom: 48px;
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
  font-size: 36px;
  line-height: 1.1;
  margin-bottom: 16px;
}

.author-title {
  display: flex;
  align-items: center;
}

.story-information {
  display: flex;

  > * {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > * + * {
    margin-left: 24px;
  }
}

.excerpt {
  line-height: 1.3;
  font-size: 16px;
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
  height: 18px;
  width: auto;
  opacity: 0.8;
  margin-right: 4px;

  .author-score & {
    height: 14px;
  }
}
</style>
