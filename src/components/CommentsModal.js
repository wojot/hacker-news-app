import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { getComment } from "../services/hackerNewsAPI";

export default function CommentsModal({ story }) {
  const { kids, title } = story;
  const [modalActive, setModalActive] = useState(false);
  const [comments, setComments] = useState([]);

  //   useEffect(() => {
  //     // if (kids) {
  //     //   kids.forEach(kid => {
  //     //     getComment(kid).then(res => setComments(res));
  //     //   });
  //     // }
  //   }, []);

  const getComments = kids => {
    setModalActive(true);
    if (kids) {
      kids.forEach(kid => {
        getComment(kid).then(res => setComments(res));
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
        show={modalActive}
        onHide={() => setModalActive(false)}
        aria-labelledby="comment-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="comment-modal">{title} - comments:</Modal.Title>
        </Modal.Header>
        <Modal.Body>{kids.join(", ")}</Modal.Body>
      </Modal>
    </>
  );
}
