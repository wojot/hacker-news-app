import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";
import StoryDefault from "./StoryDefault";
import Moment from "react-moment";
import { Card, Col, Spinner } from "react-bootstrap";

export default function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then(res => setStory(res));
  }, []);

  if (story) {
    return (
      <>
        <Col xs={12} sm={4} md={3}>
          <Card bg="dark" text="white" className="card">
            <Card.Header>
              {" "}
              {story.time ? (
                <Moment format="DD.MM.YYYY HH:mm">
                  {new Date(story.time * 1000)}
                </Moment>
              ) : (
                <Spinner animation="grow" variant="primary" />
              )}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {story.title ? (
                  story.title
                ) : (
                  <Spinner animation="grow" variant="primary" />
                )}
              </Card.Title>
              <Card.Text> {story.by ? "Author:" + story.by : ""}</Card.Text>
              {/* Continue reading... */}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  } else {
    return <StoryDefault />;
  }
}
