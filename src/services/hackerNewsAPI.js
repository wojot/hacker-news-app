import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const getStories = async type => {
  return await axios
    .get(`${BASE_URL}${type}stories.json`)
    .then(res => res.data);
};

export const getStory = async id => {
  return await axios.get(`${BASE_URL}/item/${id}.json`).then(res => res.data);
};

export const getComment = async id => {
  return await axios.get(`${BASE_URL}/item/${id}.json`).then(res => res.data);
};
