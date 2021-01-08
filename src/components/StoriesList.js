import React, { useState, useEffect } from "react";
import { getStories, getStoresDetails } from "../services/hackerNewsAPI";
import { Container, Spinner } from "react-bootstrap";
import StoryDefault from "./StoryDefault";
import LazyLoad from "react-lazyload";
import Story from "./Story";

export default function StoriesList({ path, sortProp }) {
  const [stories, setStories] = useState([]);
  const [storiesDetails, setStoriesDetails] = useState([]);

  useEffect(() => {
    if (sortProp) {
      let storiesOrdered = [];
      switch (sortProp) {
        case "dateDesc":
          setStoriesDetails(storiesDetails.sort((a, b) => b.time - a.time));
          storiesDetails.forEach((story) => {
            storiesOrdered = [...storiesOrdered, story.id];
          });
          break;
        case "dateAsc":
          setStoriesDetails(storiesDetails.sort((a, b) => a.time - b.time));
          storiesDetails.forEach((story) => {
            storiesOrdered = [...storiesOrdered, story.id];
          });
          break;
        case "score":
          setStoriesDetails(storiesDetails.sort((a, b) => b.score - a.score));
          storiesDetails.forEach((story) => {
            storiesOrdered = [...storiesOrdered, story.id];
          });
          break;
        default:
          break;
      }
      setStories(storiesOrdered);
    } else {
      getStories(path).then((res) => {
        setStories(res);
        setTimeout(
          function () {
            getStoresDetails(res).then((res) => {
              setStoriesDetails(res);
            });
          }.bind(this),
          1000
        );
      });
    }
  }, [sortProp]);

  if (stories.length === 0) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    if (stories)
      return (
        <>
          <Container fluid={true}>
            {stories.map((storyId) => {
              return (
                <LazyLoad
                  height={200}
                  offset={100}
                  key={storyId}
                  placeholder={<StoryDefault />}
                >
                  <Story storyId={storyId} />
                </LazyLoad>
              );
            })}
          </Container>
        </>
      );
  }
}
