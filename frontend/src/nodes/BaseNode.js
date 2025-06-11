import React from "react";
import { Handle } from "reactflow";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStore } from "../store";

/**
 * BaseNode abstraction for all node types, now using Material UI.
 * @param {string} title - The node's title/label.
 * @param {React.ReactNode} icon - Optional icon to display next to the title.
 * @param {React.ReactNode} children - The node's main content (inputs, selects, etc).
 * @param {Array} handles - Array of handle configs: { type, position, id, style }.
 * @param {object} style - Optional style overrides for the node container.
 * @param {string} id - The node's unique identifier.
 */
const BaseNode = ({ title, icon, children, handles = [], style = {}, id }) => {
  const deleteNode = useStore((state) => state.deleteNode);

  const handleStyle = {
    width: 12,
    height: 12,
    background: "#555",
    border: "2px solid #fff",
    boxShadow: "0 0 4px rgba(0,0,0,0.3)",
    zIndex: 10,
  };

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 220,
        minHeight: 80,
        borderRadius: 2,
        boxShadow: 2,
        p: 0,
        position: "relative",
        ...style,
      }}
    >
      {/* Handles */}
      {handles.map((h, i) => (
        <Handle
          key={h.id || i}
          type={h.type}
          position={h.position}
          id={h.id}
          style={{
            ...handleStyle,
            ...h.style,
            ...(h.position === "left" ? { left: -6 } : { right: -6 }),
          }}
        />
      ))}
      <CardContent sx={{ pb: 1, pt: 1, "&:last-child": { pb: 1 } }}>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          mb={1}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            borderRadius: 1,
            p: 0.5,
            mx: -0.5,
            position: "relative",
          }}
        >
          {icon && (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderRadius: 1,
                p: 0.5,
              }}
            >
              {icon}
            </Box>
          )}
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
          <IconButton
            size="small"
            onClick={() => deleteNode(id)}
            sx={{
              position: "absolute",
              right: 4,
              top: "50%",
              transform: "translateY(-50%)",
              padding: 0.5,
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.1)",
              },
            }}
          >
            <DeleteIcon fontSize="small" sx={{ color: "#666" }} />
          </IconButton>
        </Box>
        <Box>{children}</Box>
      </CardContent>
    </Card>
  );
};

export default BaseNode;
