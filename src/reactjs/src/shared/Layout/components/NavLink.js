import { Box } from '@mui/material';
import React from 'react';

import { grey, yellow } from '@mui/material/colors';

import { Link } from 'react-router-dom';

export default function NavLink({ to, isActive, icon }) {
    return (
        <Box
            sx={{
                padding: '1rem',
                color: isActive(to) ? 'black' : grey[400],
                backgroundColor: isActive(to) ? yellow[600] : 'transparent',
                '&:hover': {
                    color: isActive(to) ? 'black' : yellow[600],
                    backgroundColor: isActive(to) ? yellow[600] : 'transparent',
                },
            }}>
            <Link to={to}>{icon}</Link>
        </Box>
    );
}
