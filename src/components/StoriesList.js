import React, { useState, useEffect } from "react";
import { getStories } from "../services/hackerNewsAPI";
import Story from "./Story";

export default function StoriesList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then(res => setStories(res));
  }, []);

  if (!stories) return <div>loading...</div>;

  if (stories)
    return (
      <>
        {stories.slice(0,500).map(storyId => (
          <div key={storyId}>
            <Story storyId={storyId} />
          </div>
        ))}
      </>
    );
}
