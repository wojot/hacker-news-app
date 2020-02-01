import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";

export default function Story({ storyId }) {
  const [story, setStory] = useState([]);
  useEffect(() => {
    getStory(storyId).then(res => setStory(res));
  }, []);

  return <div>{story.by}</div>;
}
