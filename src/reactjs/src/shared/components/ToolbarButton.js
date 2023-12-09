import React from 'react';

import { IconButton } from '@mui/material';

export default function ToolbarButton({ color, icon, onClick }) {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                borderRadius: '0',
                color: color,
                backgroundColor: 'black',
                '&:hover': {
                    color: 'black',
                    backgroundColor: color,
                },
            }}>
            {icon}
        </IconButton>
    );
}
