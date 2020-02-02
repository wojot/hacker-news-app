import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Moment from "react-moment";

const useStyles = makeStyles({
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

export default function Story({ storyId }) {
  const classes = useStyles();
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then(res => setStory(res));
  }, []);

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {story.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">                
                <Moment format="DD.MM.YYYY HH:mm">
                    {new Date(story.time * 1000)}
                </Moment>
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Author: {story.by}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
