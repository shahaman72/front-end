// src/components/ModelTraining.js
import React, { useState } from 'react';
import { Form, InputNumber, Button } from 'antd';
import ModelAnimation from './ModelAnimation';
import axios from 'axios';

const ModelTraining = () => {
  const [clients, setClients] = useState(5);
  const [rounds, setRounds] = useState(10);
  const [stage, setStage] = useState(0);

  const startTraining = async () => {
    setStage(1);
    try {
      const response = await axios.post('http://localhost:6500/api/start-training', { clients, rounds });
      setStage(2);
      // Simulate the model updates on clients
      setTimeout(() => setStage(3), 1000);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModelAnimation stage={stage} />
      <Form layout="inline">
        {/* ... */}
      </Form>
    </>
  );
};

export default ModelTraining;
