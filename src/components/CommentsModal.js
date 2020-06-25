import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getComment } from "../services/hackerNewsAPI";
import Comment from "./Comment";

export default function CommentsModal({ story }) {
  const { kids, title } = story;
  const [modalActive, setModalActive] = useState(false);
  const [comments, setComments] = useState([]);

  const getComments = (kids) => {
    setComments([]);
    setModalActive(true);
    if (kids) {
      kids.forEach((kid) => {
        getComment(kid).then((res) =>
          setComments((prevComments) => [...prevComments, res])
        );
      });
    }
  };

  return (
    <>
      <Button
        variant="outline-light"
        size="sm"
        onClick={() => getComments(kids)}
      >
        Comments ({kids.length})
      </Button>
      <Modal
        size="lg"
        className="modalComments"
        show={modalActive}
        onHide={() => setModalActive(false)}
        aria-labelledby="comment-modal"
      >
        <Modal.Header className="modalCommentsBody" closeButton>
          <Modal.Title id="comment-modal">{title} - comments:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalCommentsBody">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
