import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube-icon.svg";

import LogoImage from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <Container className="-mx-8 -mb-8 px-8">
        <Row className="py-20 lg:py-20">
          <Col md={4} className="text-center md:text-left mb-10 md:mb-0">
            
            <p className="mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4">
              jha2ee_ simple board project
            </p>
            <div className="mt-4">
              <a href="https://facebook.com" className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4">
                <FacebookIcon className="w-2 h-2" />
              </a>
              <a href="https://twitter.com" className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4">
                <TwitterIcon className="w-2 h-2" />
              </a>
              <a href="https://youtube.com" className="cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300">
                <YoutubeIcon className="w-2 h-2" />
              </a>
            </div>
          </Col>
          <Col md={2}>
            <h5 className="font-bold">Quick Links</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Blog
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  FAQs
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Support
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="font-bold">Product</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Log In
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Personal
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Business
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Team
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 className="font-bold">Legal</h5>
            <ul className="mt-4 text-sm font-medium">
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  GDPR
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Privacy Policy
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
                  Terms of Service
                </a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300">
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

export default Footer;
