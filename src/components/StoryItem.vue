<template>
  <a :href="story.url" target="blank" class="story">
    <div class="story-container">
      <div class="image">
        <img :src="require(`@/assets/images/img-${index + 1}.jpg`)" alt="" />
      </div>

      <div class="content">
        <div class="story-title">{{ story.title }}</div>
        <div class="story-information">
          <div class="story-author">
            <User />
            <div class="author-title">
              {{ story.author }} ( <span class="author-score"><Score /></span
              >{{ story.authorKarma }})
            </div>
          </div>

          <div class="story-published-date">
            <Calendar />
            <div class="date">
              {{ story.time | moment("MMMM Do") }}
            </div>
          </div>

          <div class="story-score">
            <Score />
            <div class="score">
              {{ story.score }}
            </div>
          </div>
        </div>
        <p class="story-excerpt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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

  @include res("tab-l") {
    width: 48%;
  }

  @include res("tab-p") {
    width: 100%;
  }
}

.story-container {
  display: flex;

  @include res("tab-l") {
    flex-direction: column;
  }
}

.content {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @include res("tab-l") {
    margin-left: 0;
    margin-top: 16px;
  }
}

.story-title {
  font-weight: bold;
  font-size: 36px;
  line-height: 1.1;
  margin-bottom: 16px;

  @include res("mobile") {
    font-size: 24px;
  }
}

.author-title {
  display: flex;
  align-items: center;
}

.story-information {
  display: flex;
  margin-bottom: 24px;
  flex-direction: column;

  > * {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > * + * {
    margin-top: 16px;
  }
}

.story-excerpt {
  line-height: 1.3;
  font-size: 16px;
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.image {
  @include img-ratio(28%);
  @include res("tab-l") {
    @include img-ratio(60%);
  }
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
