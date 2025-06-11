import React, { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';
import CodeIcon from '@mui/icons-material/Code';

export const DemoNode5 = ({ id, data }) => {
  const [num, setNum] = useState(data?.num || 0);
  return (
    <BaseNode
      id={id}
      title="Demo 5"
      icon={<CodeIcon sx={{ color: '#00796b' }} />}
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
        <label>
          Number:
          <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} style={{ marginLeft: 4, width: 60 }} />
        </label>
      </div>
    </BaseNode>
  );
} 