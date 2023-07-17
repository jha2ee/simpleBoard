import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/file.css";

import TabComponent from "../components/TabComponent";
import BoardItem from "../components/BoardItem";
import { BoardModal, AddPostModal } from "../components/BoardModal";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

type Post = {
  id: number;
  title: string;
  author: string;
  contents: string;
};

function Page() {
  const [posts, setPosts] = useState<Post[]>([]);

  /* Tab 상태 관리 */
  const [activeTab, setActiveTab] = useState("home");
  const handleTabSelect = (key: string) => {
    setActiveTab(key);
  };
  /* Modal 상태 관리 */
  // 모달 상태 및 선택된 게시글 상태 관리
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post>();

  // 게시글 추가 모달 상태 관리
  const [showAddPostModal, setShowAddPostModal] = useState(false);

  // 모달 창 열기
  const openModal = (post: Post) => {
    setSelectedPost(post);
    setShowModal(true);
  };
  // 모달 창 닫기
  const closeModal = () => {
    setShowModal(false);
  };
  // 게시글 추가 모달 창 열기
  const openAddPostModal = () => {
    setShowAddPostModal(true);
  };

  // 게시글 추가 모달 창 닫기
  const closeAddPostModal = () => {
    setShowAddPostModal(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getBoard") //api 호출
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [myPosts, setMyPosts] = useState<Post[]>([]);
  useEffect(() => {
    const filteredPosts = posts.filter((post) => post.author === "me");
    setMyPosts(filteredPosts);
  }, [posts]);

  function addPost(newPost: Post): void {
    axios
      .post("http://localhost:8080/api/setPost", newPost)
      .then((response) => {
        // 추가된 게시글을 서버에서 받아온다면 shows 상태를 업데이트하도록 추가 작업 가능
        console.log("게시글 추가 성공:", response.data);
      })
      .catch((error) => {
        console.log("게시글 추가 실패:", error);
      });
    // 추가한 게시글을 포함하여 업데이트된 게시글 목록을 설정
    setPosts((posts) => [...posts, newPost]);
    closeAddPostModal();
  }

  return (
    <>
      <Container className="d-flex flex-column">
        <TabComponent activeKey={activeTab} handleSelect={handleTabSelect} />

        {activeTab === "home" && (
          <Container>
            <Row className="mb-3">
              <Col xs={8}>
                <h4>전체 게시글 목록</h4>
              </Col>
              <Col
                xs={4}
                className="d-flex justify-content-end align-items-center"
              >
                <Button variant="primary" onClick={openAddPostModal}>
                  게시글 작성
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>
                {posts.map((show) => (
                  <BoardItem post={show} key={show.id} openModal={openModal} />
                ))}
                {selectedPost && (
                  <BoardModal
                    post={selectedPost}
                    showModal={showModal}
                    closeModal={closeModal}
                  />
                )}
                {showAddPostModal && (
                  <AddPostModal
                    showModal={showAddPostModal}
                    closeModal={closeAddPostModal}
                    addPost={addPost} // addPost 함수 추가
                  />
                )}
              </Col>
            </Row>
          </Container>
        )}

        {activeTab === "mypage" && (
          <Container>
            <h4 style={{ marginBottom: 10 }}>내 글 목록</h4>
            <p>내가 쓴 글만 보입니다.</p>
            <Row style={{ marginTop: 10 }}>
              <Col>
                {myPosts.map((post) => (
                  <BoardItem post={post} key={post.id} openModal={openModal} />
                ))}
              </Col>
              {selectedPost && (
                <BoardModal
                  post={selectedPost}
                  showModal={showModal}
                  closeModal={closeModal}
                />
              )}
            </Row>
          </Container>
        )}
      </Container>
      <hr className="my-4" />
    </>
  );
}

export default Page;
