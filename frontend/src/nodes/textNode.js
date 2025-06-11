// textNode.js

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode';
import TextFieldsIcon from '@mui/icons-material/TextFields';

function extractVariables(text) {
  // Match {{variable}} where variable is a valid JS identifier
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Auto-resize logic for textarea
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      textareaRef.current.style.width = Math.min(Math.max(textareaRef.current.scrollWidth + 10, 120), 320) + 'px';
    }
  }, [currText]);

  // Handles: left for each variable, right for output
  const handles = [
    ...variables.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-var-${v}`,
      style: { top: `${30 + i * 28}px` },
    })),
    { type: 'source', position: Position.Right, id: `${id}-output` },
  ];

  return (
    <BaseNode
      id={id}
      title="Text"
      icon={<TextFieldsIcon sx={{ color: '#fbc02d' }} />}
      handles={handles}
      style={{ minHeight: Math.max(80, 40 + variables.length * 28) }}
    >
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={e => setCurrText(e.target.value)}
            style={{
              marginLeft: 4,
              minWidth: 120,
              maxWidth: 320,
              minHeight: 24,
              resize: 'none',
              fontFamily: 'inherit',
              fontSize: 14,
              borderRadius: 4,
              border: '1px solid #bbb',
              padding: 4,
              overflow: 'hidden',
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
}
