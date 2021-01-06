import React, { useState, useEffect } from "react";
import { getStories, getStoresDetails } from "../services/hackerNewsAPI";
import { Container, Spinner, CardColumns } from "react-bootstrap";
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
      if (path === "/") path = "/new"; // TODO: need to create main page instead that
      getStories(path).then((res) => {
        setStories(res);
        getStoresDetails(res).then((res) => {
          setStoriesDetails(res);
        });
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
            <CardColumns>
              {stories.map((storyId) => (
                <LazyLoad
                  height={200}
                  offset={100}
                  key={storyId}
                  placeholder={<StoryDefault />}
                >
                  <Story storyId={storyId} />
                </LazyLoad>
              ))}
            </CardColumns>
          </Container>
        </>
      );
  }
}
