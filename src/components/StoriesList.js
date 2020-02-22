import React, { useState, useEffect, Suspense, lazy } from "react";
import { getStories } from "../services/hackerNewsAPI";
import { Row, Spinner } from "react-bootstrap";
import StoryDefault from "./StoryDefault";

const Story = lazy(() => import("./Story"));

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
          <Row className="justify-content-md-center">
            {stories.slice(0, 1000).map(storyId => (
              <Suspense key={storyId} fallback={<StoryDefault />}>
                <Story storyId={storyId} />
              </Suspense>
            ))}
          </Row>
        </>
      );
  }
}
