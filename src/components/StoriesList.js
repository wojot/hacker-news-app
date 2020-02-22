import React, { useState, useEffect } from "react";
import { getStories } from "../services/hackerNewsAPI";
import { Container, Row, Spinner, CardColumns } from "react-bootstrap";
import StoryDefault from "./StoryDefault";
import LazyLoad from "react-lazyload";
import Story from "./Story";

export default function StoriesList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then(res => setStories(res));
  }, []);

  if (stories.length === 0) {
    return <Spinner animation="border" variant="primary" />;
  } else {
    if (stories)
      return (
        <>
          testtt
          <Container fluid={true}>
            <CardColumns>
              {stories.map(storyId => (
                <LazyLoad key={storyId} placeholder={<StoryDefault />}>
                  <Story storyId={storyId} />
                </LazyLoad>
              ))}
            </CardColumns>
          </Container>
        </>
      );
  }
}
