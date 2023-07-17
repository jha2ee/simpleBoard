import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../types";

type AddPostModalProps = {
  showModal: boolean;
  closeModal: () => void;
  addPost: (newPost: Post) => void;
};

const AddPostModal: React.FC<AddPostModalProps> = ({
  showModal,
  closeModal,
  addPost,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("작성자");
  const [contents, setContents] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newPost: Post = {
      id: uuidv4(),
      title,
      author,
      contents
    }
    addPost(newPost);
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
    <Modal show={showModal} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Text className="mb-2 text-muted">글쓴이: {post.author}</Card.Text>
        <Card.Text className="mb-2 text-muted">
          글쓴 시간: {post.created_at}
        </Card.Text>
        <Card.Text>{post.contents}</Card.Text>
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
