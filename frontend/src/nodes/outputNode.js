// outputNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';
import OutputIcon from '@mui/icons-material/Output';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      icon={<OutputIcon sx={{ color: '#2e7d32' }} />}
      handles={[{
        type: 'target',
        position: Position.Left,
        id: `${id}-value`,
      }]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            style={{ marginLeft: 4 }}
          />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange} style={{ marginLeft: 4 }}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
