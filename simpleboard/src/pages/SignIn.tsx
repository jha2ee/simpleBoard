import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { ReactComponent as LoveIcon } from "../assets/images/love-illustration.svg";

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 처리 로직 구현
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 처리 로직 구현
    console.log("Signup Email:", signupEmail);
    console.log("Signup Password:", signupPassword);
  };

  const handleOnClick = () => {
    console.log("button pressed");
  }

  return (
    <Container className="mt-5" style={{ marginBottom: 50 }}>
      <Row>

          <LoveIcon className="w-2 h-2 align-self-center" style={{ width: 300, height: 300 }} />

        <Col>
          <h2>로그인</h2>
          <br/>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email 주소</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
          <br/>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formSignupEmail">
              <Form.Label>Email 주소</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
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
  );
};

export default LoginPage;
