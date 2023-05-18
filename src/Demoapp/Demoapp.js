// src/App.js
import React, { useState } from "react";
import ModelGraph from "./components/ModelGraph";
import ActionDescription from "./components/ActionDescription";
import { Layout, Row, Col, Divider } from "antd";
import { v4 as uuidv4 } from "uuid";

const { Header, Content } = Layout;

function Demoapp() {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages([...messages, { id: uuidv4(), text }]);
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Divider orientation="left">Federated Learning Demo</Divider>
        <Row>
          <Col span={16}>
            <ModelGraph addMessage={addMessage} />
          </Col>
          <Col span={8}>
            <ActionDescription messages={messages} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Demoapp;
