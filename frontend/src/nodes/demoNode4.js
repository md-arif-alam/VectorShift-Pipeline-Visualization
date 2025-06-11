import React from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';
import CodeIcon from '@mui/icons-material/Code';

export const DemoNode4 = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Demo 4"
      icon={<CodeIcon sx={{ color: '#1976d2' }} />}
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
        <span>This is a demo node 4.</span>
      </div>
    </BaseNode>
  );
} 