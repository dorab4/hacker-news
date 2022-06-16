import fetchData from "../helpers/fetchData";
import getMultipleRandom from "../helpers/randomizeData";

export async function getAllStoriesIDs() {
  // get all stories ID
  const data = await fetchData(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  return data;
}

export async function getStoryFromID(id) {
  // get all stories ID
  const story = await fetchData(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return story;
}

export async function getAuthorFromID(id) {
  // get all stories ID
  const story = await fetchData(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json`
  );
  return story;
}

export async function getStory(id) {
  // get all stories ID
  const story = await getStoryFromID(id);
  const author = await getAuthorFromID(story.by);
  story.by = author;

  return story;
}

export async function getNewestStories() {
  const storiesIDs = await getAllStoriesIDs();
  const random10 = getMultipleRandom(storiesIDs, 10);

  const stories = [];
  for (const id of random10) {
    const story = await getStory(id);
    stories.push(story);
  }

  // sort by score
  stories.sort((a, b) => a.score - b.score);

  return stories;
}
