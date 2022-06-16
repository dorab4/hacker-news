import fetchData from "../helpers/fetchData";
import fetchRandomNItems from "../helpers/fetchRandomData";

export async function getAllStoriesIDs() {
  // get all stories ID
  const data = await fetchData(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  return data;
}

export async function getStoryFromID(id) {
  // get story from ID
  const story = await fetchData(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return story;
}

export async function getAuthorFromID(id) {
  // get author from author name
  const story = await fetchData(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json`
  );
  return story;
}

export async function getStory(storyID) {
  // get story from ID
  const story = await getStoryFromID(storyID);

  // get author's name and karma score
  const { id, karma } = await getAuthorFromID(story.by);
  const finalStory = { ...story };
  finalStory.author = id;
  finalStory.authorKarma = karma;

  return finalStory;
}

// get random 10 stories in ascending order
export async function getFinalStories() {
  // get IDs of all stories
  const storiesIDs = await getAllStoriesIDs();

  // get random 10 IDs
  const randomStories = fetchRandomNItems(storiesIDs, 10);

  const stories = [];
  for (const id of randomStories) {
    // get story data based on an ID
    const story = await getStory(id);

    // push to stories array
    stories.push(story);
  }

  // sort stories by score ascending
  stories.sort((a, b) => a.score - b.score);

  return stories;
}
