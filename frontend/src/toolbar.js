// toolbar.js

import React from 'react';
import { DraggableNode } from './draggableNode';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InputIcon from '@mui/icons-material/Input';
import OutputIcon from '@mui/icons-material/Output';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';

const nodeIcons = {
  customInput: <InputIcon sx={{ color: '#1976d2', fontSize: 24 }} />,
  llm: <SmartToyIcon sx={{ color: '#7b1fa2', fontSize: 24 }} />,
  customOutput: <OutputIcon sx={{ color: '#2e7d32', fontSize: 24 }} />,
  text: <TextFieldsIcon sx={{ color: '#fbc02d', fontSize: 24 }} />,
  demoNode1: <CodeIcon sx={{ color: '#d32f2f', fontSize: 24 }} />,
  demoNode2: <CodeIcon sx={{ color: '#c2185b', fontSize: 24 }} />,
  demoNode3: <CodeIcon sx={{ color: '#7b1fa2', fontSize: 24 }} />,
  demoNode4: <CodeIcon sx={{ color: '#1976d2', fontSize: 24 }} />,
  demoNode5: <CodeIcon sx={{ color: '#00796b', fontSize: 24 }} />,
};

export const PipelineToolbar = () => {
    const nodes = [
      { type: 'customInput', label: 'Input' },
      { type: 'llm', label: 'LLM' },
      { type: 'customOutput', label: 'Output' },
      { type: 'text', label: 'Text' },
      { type: 'demoNode1', label: 'Demo 1' },
      { type: 'demoNode2', label: 'Demo 2' },
      { type: 'demoNode3', label: 'Demo 3' },
      { type: 'demoNode4', label: 'Demo 4' },
      { type: 'demoNode5', label: 'Demo 5' },
    ];
    return (
        <Paper elevation={3} sx={{ p: 2, mb: 2, background: '#f5f7fa', borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700} color="primary.main" mb={1}>
                VectorShift Pipeline Nodes
            </Typography>
            <Box mt={1} display="flex" flexWrap="wrap" gap={2}>
                {nodes.map((node) => (
                  <DraggableNode 
                    key={node.type} 
                    type={node.type} 
                    label={node.label} 
                    icon={nodeIcons[node.type]}
                  />
                ))}
            </Box>
        </Paper>
    );
};
