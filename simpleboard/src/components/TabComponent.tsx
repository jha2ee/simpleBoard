import React from "react";
import { Tab, Tabs } from "react-bootstrap";

type TabsProps = {
  activeKey: string;
  handleSelect: any;
};

const TabsComponent: React.FC<TabsProps> = ({ activeKey, handleSelect }) => {
  return (
    <Tabs defaultActiveKey={activeKey} id="uncontrolled-tab-example" className="mb-3" onSelect={handleSelect}>
      <Tab eventKey="home" title="Home"/>
      <Tab eventKey="mypage" title="My Page"/>

    </Tabs>
  );
};

export default TabsComponent;
