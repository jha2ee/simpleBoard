import React from "react";
import { Card } from "react-bootstrap";

type Post = {
  id: number;
  title: string;
  contents: string;
};

type BoardItemProps = {
  post: Post;
  openModal: (post: Post) => void;
};

const BoardItem: React.FC<BoardItemProps> = ({ post, openModal }) => {
  const handleClick = () => {
    openModal(post);
    console.log("clicked");
  };

  return (
    <Card key={post.id} className="mb-3" onClick={handleClick}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">작성자: 임시로</Card.Subtitle>
        <Card.Text>{post.contents}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BoardItem;
