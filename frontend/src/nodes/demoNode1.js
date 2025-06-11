import React, { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';
import CodeIcon from '@mui/icons-material/Code';

export const DemoNode1 = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || '');
  return (
    <BaseNode
      id={id}
      title="Demo 1"
      icon={<CodeIcon sx={{ color: '#d32f2f' }} />}
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
        <span>This is a demo node 1.</span>
        <label>
          Value:
          <input type="text" value={value} onChange={e => setValue(e.target.value)} style={{ marginLeft: 4 }} />
        </label>
      </div>
    </BaseNode>
  );
} 