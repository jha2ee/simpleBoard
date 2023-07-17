import React from "react";
import { Card } from "react-bootstrap";
import { Post } from "../types";

type BoardItemProps = {
  post: Post;
  openModal: (post: Post) => void;
};

const BoardItem: React.FC<BoardItemProps> = ({ post, openModal }) => {
  const handleClick = () => {
    openModal(post);
  };

  return (
    <Card key={post.id} className="mb-3" onClick={handleClick}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
        <Card.Text>{post.contents}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BoardItem;
