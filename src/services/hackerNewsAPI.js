import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
const FETCHLIMIT = 100;

export const getStories = async (type) => {
  return await axios
    .get(
      `${BASE_URL}${type}stories.json?limitToFirst=${FETCHLIMIT}&orderBy="$key"`
    )
    .then((res) => res.data);
};

export const getStory = async (id) => {
  return await axios.get(`${BASE_URL}/item/${id}.json`).then((res) => res.data);
};

export const getStoresDetails = async (stories) => {
  let storiesArr = [];
  stories.forEach((id) => {
    storiesArr = [...storiesArr, getStory(id)];
  });

  return Promise.all(storiesArr).then((res) => {
    return res;
  });
};

export const getComment = async (id) => {
  return await axios.get(`${BASE_URL}/item/${id}.json`).then((res) => res.data);
};
