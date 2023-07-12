import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import NavBar from "../components/NavBar";
function Page() {
  const [show, setShow] = useState(false);

  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 게시물' },
    { id: 2, title: '두 번째 게시물' },
    { id: 3, title: '세 번째 게시물' }
  ]);
  return (
    <>
      <NavBar />
      <div>
      <h2>게시판 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Page;
