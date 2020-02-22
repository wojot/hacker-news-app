import React from "react";
import { Card } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export default function StoryDefault() {
  return (
    <Card bg="dark" text="white" className="card">
      <Card.Body>
        <Card.Title>
          <Spinner animation="grow" variant="primary" />
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}
