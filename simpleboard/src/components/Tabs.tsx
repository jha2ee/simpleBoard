import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs, Container } from "react-bootstrap";
function TabComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
 
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="mypage" title="My Page">
          Tab content for Mypage
        </Tab>

      </Tabs>
      
    </>
  );
}

export default TabComponent;
