import React, { useState } from "react";
import { Modal, Button, Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Post } from "../types";

type AddPostModalProps = {
  showModal: boolean;
  closeModal: () => void;
  addPost: (newPost: Post) => void;
};

type UpdatePostModalProps = {
  post : Post;
  showModal: boolean;
  closeModal: () => void;
  updatePost: (postId : any, updatedPost: Post) => void;
};

type BoardModalProps = {
  post: Post;
  showModal: boolean;
  closeModal: () => void;
  openEditModal: () => void;
  deletePost: (postId : any) => void;
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
      id: "", //server에서 할당
      title: title,
      author: author,
      contents: contents,
    };
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
          <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
            추가
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const EditPostModal: React.FC<UpdatePostModalProps> = ({ post, showModal, closeModal, updatePost }) => {
  const [updatedPost, setUpdatedPost] = useState<Post>({
    id: post.id,
    title: post.title,
    author: post.author,
    contents: post.contents,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUpdatedPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePost(updatedPost.id, updatedPost);
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>게시글 수정</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={updatedPost.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formAuthor">
            <Form.Label>작성자</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={updatedPost.author}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formContents">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="contents"
              value={updatedPost.contents}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            수정
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const BoardModal: React.FC<BoardModalProps> = ({
  post,
  showModal,
  closeModal,
  openEditModal,
  deletePost,
}) => {
  return (
    <Modal show={showModal} onHide={closeModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Text className="mb-2 text-muted">글쓴이: {post.author}</Card.Text>
        <Card.Text className="mb-2 text-muted">
          편집 및 삭제는 지원되지 않습니다.
        </Card.Text>
        <Card.Text>{post.contents}</Card.Text>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={openEditModal}>
          수정
        </Button>
        <Button variant="danger" onClick={deletePost}>
          삭제
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export { BoardModal, AddPostModal, EditPostModal };
