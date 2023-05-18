// src/components/ModelGraph.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Graph } from 'react-d3-graph';
import { Modal, Upload, Button, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ModelGraph = ({ addMessage }) => {
  const [data, setData] = useState({
    nodes: [{ id: 'Global Model' }],
    links: [],
  });

  const [training, setTraining] = useState(false);
  const [clientCount, setClientCount] = useState(0);
  const [selectedClient, setSelectedClient] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const config = {
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    highlightDegree: 1,
    height: 600,
    width: 800,
    node: {
      color: 'lightgreen',
      size: 300,
      fontSize: 14,
      highlightFontSize: 16,
      highlightColor: 'orange',
    },
    link: {
      highlightColor: 'orange',
    },
  };

  const onClickNode = (nodeId) => {
    if (nodeId === 'Global Model') {
      const newClientCount = clientCount + 1;
      const newClient = `Client ${newClientCount}`;
      setData({
        nodes: [...data.nodes, { id: newClient }],
        links: [...data.links, { source: 'Global Model', target: newClient }],
      });
      setClientCount(newClientCount);
      addMessage(`Client ${newClientCount} has been created with weights [0.1, 0.2, 0.3, 0.4]`);
    } else {
      setSelectedClient(nodeId);
      setModalVisible(true);
    }
  };

    //...
    const handleUpload = (info) => {
        if (true) {
          setTraining(true);
          addMessage(`Client node ${selectedClient} is training`);
          setTimeout(() => {
            setTraining(false);
            addMessage(`Updated weight of ${selectedClient} is [0.5, 0.6, 0.7, 0.8]`);
          }, 2000);
        }
      };
    
      const handleUpdateGlobal = () => {
        // alert(`Updated global model with weights from ${selectedClient}`);
        addMessage(`Updating the global model with weights [0.5, 0.6, 0.7, 0.8]`);
        setModalVisible(false);
      };
    
      return (
        <>
          <Graph
            id="graph-id"
            data={data}
            config={config}
            onClickNode={onClickNode}
          />
          <Modal
            title={`Upload CSV for ${selectedClient}`}
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
          >
         
            <Upload name="file" action="http://localhost:5000/api/upload-csv" onChange={handleUpload}>
              <Button icon={<UploadOutlined />}>Upload CSV</Button>
            </Upload>

            
            {training && <p>Training in progress...</p>}
            <Divider />
            <Button key="update" type="primary" onClick={handleUpdateGlobal} disabled={training}>
              Update Global Model
            </Button>
          </Modal>
        </>
      );
    };
    
    export default ModelGraph;
    