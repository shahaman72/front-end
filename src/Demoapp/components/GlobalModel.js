// src/components/GlobalModel.js
import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const GlobalModel = ({ onCreateClient }) => {
  return (
    <div>
      <h2>Global Model</h2>
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={onCreateClient}>
        Create Client Model
      </Button>
    </div>
  );
};

export default GlobalModel;
