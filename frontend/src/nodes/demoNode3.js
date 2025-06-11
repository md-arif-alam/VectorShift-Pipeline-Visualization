import React, { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';
import CodeIcon from '@mui/icons-material/Code';

export const DemoNode3 = ({ id, data }) => {
  const [option, setOption] = useState(data?.option || 'A');
  return (
    <BaseNode
      id={id}
      title="Demo 3"
      icon={<CodeIcon sx={{ color: '#7b1fa2' }} />}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <div>
        <span>This is a demo node 3.</span>
        <label>
          Option:
          <select value={option} onChange={e => setOption(e.target.value)} style={{ marginLeft: 4 }}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
} 