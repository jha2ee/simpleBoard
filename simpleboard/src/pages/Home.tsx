import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
function Page() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello") //api 호출
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div style={{ margin: 10 }}>
        <h2>환영합니다! 이곳은 게시판입니다.</h2>
        <div>백엔드에서 가져온 데이터입니다 : {hello}</div>
      </div>
    </>
  );
}

export default Page;
