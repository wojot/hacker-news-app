import React from "react";
import { Card, Col } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export default function StoryDefault() {
  return (
    <Col xs={12} sm={4} md={3}>
      <Card bg="dark" text="white" className="card">
        <Card.Header>
          <Spinner animation="grow" variant="primary" />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <Spinner animation="grow" variant="primary" />
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
