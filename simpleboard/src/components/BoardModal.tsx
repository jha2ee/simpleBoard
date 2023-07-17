import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

type AddPostModalProps = {
  showModal: boolean;
  closeModal: () => void;
  addPost: (title: string, contents: string) => void;
};

const AddPostModal: React.FC<AddPostModalProps> = ({
  showModal,
  closeModal,
  addPost,
}) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost(title, contents);
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>게시글 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formContents">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            추가
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const BoardModal = ({ post, showModal, closeModal }: any) => {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{post.contents}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { BoardModal, AddPostModal };
