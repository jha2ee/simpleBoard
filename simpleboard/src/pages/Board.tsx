import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Tab from "../components/Tabs";

type Post = {
  id: number;
  title: String;
  contents: String;
};
function Page() {
  const [shows, setShows] = useState<Post[]>([
    {
      id: 1,
      title: "s1",
      contents: "test",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getBoard") //api 호출
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Tab />
      <div>
        <h3>게시판 목록</h3>
        백엔드 연결 결과 -
        {shows.map((post) => (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.contents}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;
