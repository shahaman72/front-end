// src/components/ClientModel.js
import React, { useState } from 'react';
import { Button, Upload, message } from 'antd';
import { UploadOutlined, SyncOutlined } from '@ant-design/icons';

const ClientModel = ({ id, onUpdateGlobal }) => {
  const [training, setTraining] = useState(false);

  const handleUpload = (info) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
      setTraining(true);
      // Simulate training process
      setTimeout(() => setTraining(false), 2000);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div>
      <h2>Client Model {id}</h2>
      <Upload name="file" action="http://localhost:5000/api/upload-csv" onChange={handleUpload}>
        <Button icon={<UploadOutlined />}>Upload CSV</Button>
      </Upload>
      {training && <SyncOutlined spin />}
      {!training && (
        <Button type="primary" onClick={() => onUpdateGlobal(id)}>
          Update Global Model
        </Button>
      )}
    </div>
  );
};

export default ClientModel;
