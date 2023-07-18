import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as NotionIcon } from "../assets/images/notion-icon.svg";
import "../styles/file.css";

const component = () => {
  return (
    <div className="bg-gray-200">
      <Container className="-mx-8 -mb-8 px-8">
        <hr style={{ marginTop: 100 }} />
        <Row className="py-20 lg:py-20">
          <Col md={4} className="text-center md:text-left mb-10 md:mb-0">
            <div className="mt-4">
              <a
                href="https://mejha2ee.notion.site/Project-SimpleBoard-9be17e818f5e4cebbbc6b5be179fc6ab?pvs=4"
                className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 link-no-underline"
              >
                <NotionIcon
                  className="w-2 h-2"
                  style={{ width: 100, height: 100 }}
                />
              </a>
              <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">
                jha2ee_ simple board project
                <br />더 많은 정보를 보고 싶다면 아이콘을 클릭하세요
              </p>
            </div>
          </Col>
          <Col md={2}>
            <h5 className="font-bold">Quick Links</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Blog
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  FAQs
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Support
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  About Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="font-bold">Product</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Log In
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Personal
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Business
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Team
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="font-bold">Legal</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  GDPR
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Terms of Service
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#"
                  className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300 link-no-underline"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default component;
