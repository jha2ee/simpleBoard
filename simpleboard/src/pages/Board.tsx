import React, { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import NavBar from "../components/NavBar";

type Post = {
  id : number,
  title : String
}
function Page() {
  const [show, setShow] = useState<Post>({
    id:1,
    title:'s1'
  }
  );

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getBoard") //api 호출
      .then((response) => setShow(response.data))
      .catch((error) => console.log(error));
  }, []);
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
      <p>백엔드 연결 결과 : {show.id} : {show.title} </p>
    </div>
    </>
  );
}

export default Page;
