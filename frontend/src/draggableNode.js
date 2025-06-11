// draggableNode.js

import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <Card
        className={type}
        draggable
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        sx={{
          cursor: 'grab',
          minWidth: 80,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          backgroundColor: '#1C2536',
          justifyContent: 'center',
          flexDirection: 'column',
          boxShadow: 3,
          transition: 'box-shadow 0.2s',
          '&:hover': {
            boxShadow: 6,
            backgroundColor: '#24304a',
          },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={0.5}>
          {icon}
          <Typography variant="subtitle2" color="#fff" fontWeight={600}>
            {label}
          </Typography>
        </Box>
      </Card>
    );
  };
  