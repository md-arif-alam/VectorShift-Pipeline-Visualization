import React from 'react';
import { Handle, Position } from 'reactflow';
import BaseNode from './BaseNode';
import CodeIcon from '@mui/icons-material/Code';

export const DemoNode2 = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Demo 2"
      icon={<CodeIcon sx={{ color: '#c2185b' }} />}
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
        <span>This is a demo node 2.</span>
      </div>
    </BaseNode>
  );
} 