import React, { useState, useEffect } from "react";
import { getStories, getStory } from "../services/hackerNewsAPI";
import { Container, Spinner, CardColumns } from "react-bootstrap";
import StoryDefault from "./StoryDefault";
import LazyLoad from "react-lazyload";
import Story from "./Story";

export default function StoriesList({ path, sortProp }) {
  const [stories, setStories] = useState([]);
  const [storiesDetails, setStoriesDetails] = useState([]);

  useEffect(() => {
    switch (sortProp) {
      case "sortDateDesc":
        console.log("dateDesc");
        break;
      case "sortDateAsc":
        console.log("dateAsc");
        break;
      case "sortScore":
        console.log("score");
        break;
      default:
        break;
    }

    if (path === "/") path = "/new"; // TODO: need to create main page instead that
    getStories(path).then((res) => {
      setStories(res);
    });

    // stories.map((id) => {
    //   return getStory(id).then((res) => {
    //     let obj = { id: res.id, score: res.score };
    //     setStoriesDetails([...storiesDetails, obj]);
    //   });
    // });

    setStoriesDetails([0, 1]);
    console.log(storiesDetails);

    // getStories(path).then(res => {
    //   res.map(id =>{
    //     console.log(id)
    //   }
    // })
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
