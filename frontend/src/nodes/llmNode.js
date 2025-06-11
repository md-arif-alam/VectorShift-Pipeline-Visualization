// llmNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'gpt-3.5-turbo');

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="LLM"
      icon={<SmartToyIcon sx={{ color: '#7b1fa2' }} />}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-prompt`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <label>
          Model:
          <select value={model} onChange={handleModelChange} style={{ marginLeft: 4 }}>
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="gpt-4">GPT-4</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
