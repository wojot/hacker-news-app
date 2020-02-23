import React from "react";
import { Card } from "react-bootstrap";
import Parser from "html-react-parser";
import Moment from "react-moment";

export default function Comment({ comment }) {
  const { by, id, text, time } = comment;
  return (
    <Card key={id} border="dark" className="commentBlock">
      <Card.Body>
        <Card.Title>
          {by} wrote:
          <Moment format="DD.MM.YYYY HH:mm" className="dateComment">
            {new Date(time * 1000)}
          </Moment>
        </Card.Title>
        <Card.Text>{Parser(text)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
