// src/components/ModelAnimation.js
import React from 'react';
import { Typography } from 'antd';
import './ModelAnimation.css';

const { Text } = Typography;

const ModelAnimation = ({ stage }) => {
  return (
    <div className="model-animation-container">
      <div className={`global-model ${stage >= 1 ? 'visible' : ''}`}>
        <div className="model">
          <Text strong>Global Model</Text>
        </div>
      </div>
      <div className={`client-models ${stage >= 2 ? 'visible' : ''}`}>
        {/* Render multiple client models */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="model">
            <Text strong>Client {index + 1}</Text>
          </div>
        ))}
      </div>
      <div className={`updated-global-model ${stage >= 3 ? 'visible' : ''}`}>
        <div className="model">
          <Text strong>Updated Global Model</Text>
        </div>
      </div>
    </div>
  );
};

export default ModelAnimation;
