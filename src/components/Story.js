import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";
import StoryDefault from "./StoryDefault";
import Moment from "react-moment";
import { Card, Spinner } from "react-bootstrap";

export default function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then(res => setStory(res));
  }, []);

  if (story) {
    return (
      <>
        <Card bg="dark" text="white" className="card">
          <Card.Body>
            <Card.Title>
              {story.title ? (
                story.title
              ) : (
                <Spinner animation="grow" variant="primary" />
              )}
            </Card.Title>
            <Card.Text>
              {" "}
              {story.by ? "Author: " + story.by + ", " : ""}
              {story.time ? (
                <Moment format="DD.MM.YYYY HH:mm">
                  {new Date(story.time * 1000)}
                </Moment>
              ) : (
                ""
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <StoryDefault />;
  }
}
