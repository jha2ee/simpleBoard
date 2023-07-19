import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { ReactComponent as LoveIcon } from "../assets/images/love-illustration.svg";
import { User } from "../types";
import axios from "axios";

type LoginPageProps = {};
const baseURL = "http://localhost:8080/api/";

const LoginPage: React.FC<LoginPageProps> = () => {
  const [profile, setProfile] = useState<User | null>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signupNickname, setSignupNickname] = useState<string>("");
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 처리 로직 구현
    if (!email || !password) {
      setShowAlert(true);
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    setShowAlert(false);
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupEmail || !signupPassword || !signupNickname) {
      setShowAlert(true);
      return;
    } // 회원가입 처리 로직 구현
    axios
    .post(baseURL + "signUp", {
      nickname: signupNickname,
      email: signupEmail,
      password: signupPassword,
    })
    .then((response) => {
      console.log("Signup response:", response.data);
      setProfile(response.data);
      setShowAlert(false);
    })
    .catch((error) => {
      console.log("Signup error:", error);
    });

    
    setSignupNickname("");
    setSignupEmail("");
    setSignupPassword("");
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          아이디 또는 비밀번호를 확인하세요.
        </div>
      )}
      <Container className="mt-5" style={{ marginBottom: 50 }}>
        <Row>
          <LoveIcon
            className="w-2 h-2 align-self-center"
            style={{ width: 300, height: 300 }}
          />

          <Col>
            <h2>로그인</h2>
            <br />
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="아이디 저장" />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
                로그인
              </Button>
            </Form>
          </Col>
          <Col>
            <h2>회원가입</h2>
            <br />
            <Form.Group controlId="formSignupNickname">
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                type="text"
                placeholder="닉네임을 입력하세요(최대 8글자)"
                value={signupNickname}
                onChange={(e) => setSignupNickname(e.target.value)}
              />
            </Form.Group>
            <Form onSubmit={handleSignup}>
              <Form.Group controlId="formSignupEmail">
                <Form.Label>아이디(이메일 주소)</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@example.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formSignupPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
                회원가입
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
