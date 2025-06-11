// submit.js

import React, { useState } from 'react';
import { useStore } from './store';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const SubmitButton = () => {
    const nodes = useStore(state => state.nodes);
    const edges = useStore(state => state.edges);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbar(s => ({ ...s, open: false }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges })
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setSnackbar({
                open: true,
                message: `Nodes: ${data.num_nodes} | Edges: ${data.num_edges} | Is DAG: ${data.is_dag ? 'Yes' : 'No'}`,
                severity: 'success',
            });
        } catch (err) {
            setSnackbar({
                open: true,
                message: 'Failed to submit pipeline: ' + err.message,
                severity: 'error',
            });
        }
    };

    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                <Button variant="contained" color="primary" size="large" onClick={handleSubmit} sx={{ borderRadius: 2, boxShadow: 2 }}>
                    Submit
                </Button>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <MuiAlert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }} elevation={6} variant="filled">
                    {snackbar.message}
                </MuiAlert>
            </Snackbar>
        </>
    );
}
