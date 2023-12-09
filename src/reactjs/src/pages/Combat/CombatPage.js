import React from 'react';

import { Stack } from '@mui/material';

import Toolbar from './components/Toolbar';
import CombatTable from './components/CombatTable';

export default function CombatPage() {
    return (
        <Stack className='h-full'>
            <Toolbar />
            <CombatTable />
        </Stack>
    );
}
