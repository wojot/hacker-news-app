import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";
import StoryDefault from "./StoryDefault";
import CommentsModal from "./CommentsModal";
import Moment from "react-moment";
import { Card, Spinner, Badge, Button } from "react-bootstrap";

export default function Story({ storyId }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((res) => setStory(res));
  }, [storyId]);

  if (story) {
    return (
      <>
        <Card
          bg="dark"
          text="white"
          className="card"
          style={{
            maxWidth: "32%",
            marginLeft: "1%",
            float: "left",
            height: "110px",
          }}
        >
          <Card.Body>
            <Card.Title>
              {story.title ? (
                story.title.substring(0, 60) + "..."
              ) : (
                <Spinner animation="grow" variant="primary" />
              )}{" "}
              {story.score ? (
                <Badge pill variant="light">
                  {story.score}
                </Badge>
              ) : (
                ""
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
            <Card.Text>
              {story.kids ? <CommentsModal story={story} /> : ""}
              {"  "}
              {story.url ? (
                <Button
                  variant="outline-light"
                  size="sm"
                  href={story.url}
                  target="_blank"
                >
                  Read more...
                </Button>
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
