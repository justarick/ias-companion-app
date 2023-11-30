import { Box } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';

export default function NavLink({ to, isActive, icon }) {
    return (
        <Box
            className={
                isActive(to)
                    ? 'p-2 bg-yellow-600 text-black'
                    : 'p-2 text-gray-400 hover:text-yellow-600'
            }>
            <Link to={to}>{icon}</Link>
        </Box>
    );
}
