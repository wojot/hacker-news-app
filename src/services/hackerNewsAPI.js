import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

export const getStories = async () => {
  return await axios.get(`${BASE_URL}topstories.json`).then(res => res.data);
};

export const getStory = async id => {
  return await axios.get(`${BASE_URL}item/${id}.json`).then(res => res.data);
};