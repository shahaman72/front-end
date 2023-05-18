// src/components/ActionDescription.js
import React from 'react';
import { Card } from 'antd';

const ActionDescription = ({ messages }) => (
  <div style={{ overflowY: 'auto', maxHeight: '600px' }}>
    {messages.map(({ id, text }) => (
      <Card key={id} style={{ marginBottom: '10px' }}>
        {text}
      </Card>
    ))}
  </div>
);

export default ActionDescription;
