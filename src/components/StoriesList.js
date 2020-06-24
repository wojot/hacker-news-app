import React, { useState, useEffect } from "react";
import { getStories } from "../services/hackerNewsAPI";
import { Container, Spinner, CardColumns } from "react-bootstrap";
import StoryDefault from "./StoryDefault";
import LazyLoad from "react-lazyload";
import Story from "./Story";

export default function StoriesList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/") path = "/new"; // TODO: need to create main page instead that
    getStories(path).then((res) => setStories(res));
  }, []);

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
