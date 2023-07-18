import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/file.css";
import { Post } from "../types";

import TabComponent from "../components/TabComponent";
import BoardItem from "../components/BoardItem";
import {
  BoardModal,
  AddPostModal,
  EditPostModal,
} from "../components/BoardModal";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

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

  // 모달 상태 관리
  const [showAddPostModal, setShowAddPostModal] = useState(false); //추가
  const [showEditPostModal, setShowEditPostModal] = useState(false); //편집

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

  //게시글 편집 모달 창 열기
  const openEditPostModal = () => {
    // 게시글 수정 모달을 열고 수정할 게시글 데이터를 설정
    setShowEditPostModal(true);
  };
  const closeEditPostModal = () => {
    setShowEditPostModal(false);
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
    const filterName = "David Thompson";
    const filteredPosts = posts.filter((post) => post.author === filterName);
    setMyPosts(filteredPosts);
  }, [posts]);

  /* 게시글 업로드 */
  function addPost(newPost: Post): void {
    axios
      .post("http://localhost:8080/api/addPost", newPost)
      .then((response) => {
        window.alert("게시글이 정상적으로 등록되었습니다.");
        //console.log("게시글 추가 성공:", response.data);
        // 서버로부터 받은 새로운 게시글의 ID를 가져온다
        //const postId = response.data;
        // 새로운 게시글 객체를 생성하고 목록에 추가한다
        setPosts((prevPosts) => [...prevPosts, response.data]);
      })
      .catch((error) => {
        console.log("게시글 추가 실패:", error);
      });

    closeAddPostModal();
  }
  /* 게시글 수정 및 삭제 */
  function updatePost(postId: any, updatedPost: Post) {
    axios
      .put(`http://localhost:8080/api/updatePost/${postId}`, updatedPost)
      .then((response) => {
        //console.log("게시글 수정 성공:", response.data);
        closeModal();
        // 게시글 목록을 다시 불러와서 업데이트
        axios
          .get("http://localhost:8080/api/getBoard")
          .then((response) => {
            setPosts(response.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log("게시글 수정 실패:", error);
      });
  }

  function deletePost() {
    const confirmed = window.confirm("정말 삭제하시겠습니까?");
    if (confirmed) {
    const postId = selectedPost?.id;
    axios
      .delete(`http://localhost:8080/api/deletePost/${postId}`)
      .then((response) => {
        //console.log("게시글 삭제 성공:", response.data);
        window.alert("게시글이 삭제되었습니다.");
        closeModal();
        // 게시글 목록을 다시 불러와서 업데이트
        axios
          .get("http://localhost:8080/api/getBoard")
          .then((response) => {
            setPosts(response.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log("게시글 삭제 실패:", error);
      });
    }
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
                {posts.reverse().map((show) => (
                  <BoardItem
                    post={show}
                    key={show.id ? show.id : show.title}
                    openModal={openModal}
                  />
                ))}
                {selectedPost && (
                  <BoardModal
                    post={selectedPost}
                    showModal={showModal}
                    closeModal={closeModal}
                    openEditModal={openEditPostModal}
                    deletePost={deletePost}
                  />
                )}
                {showAddPostModal && (
                  <AddPostModal
                    showModal={showAddPostModal}
                    closeModal={closeAddPostModal}
                    addPost={addPost} // addPost 함수 추가
                  />
                )}
                {showEditPostModal && selectedPost && (
                  <EditPostModal
                    post={selectedPost}
                    showModal={showEditPostModal}
                    closeModal={closeEditPostModal}
                    updatePost={updatePost}
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
                  openEditModal={openEditPostModal}
                  deletePost={deletePost}
                />
              )}
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
}

export default Page;
