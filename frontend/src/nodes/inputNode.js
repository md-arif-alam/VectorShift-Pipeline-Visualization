// inputNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';
import InputIcon from '@mui/icons-material/Input';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      icon={<InputIcon sx={{ color: '#1976d2' }} />}
      handles={[{
        type: 'source',
        position: Position.Right,
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
          <select value={inputType} onChange={handleTypeChange} style={{ marginLeft: 4 }}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
