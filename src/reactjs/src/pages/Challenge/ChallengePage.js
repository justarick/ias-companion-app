import React from 'react';

import { Stack } from '@mui/material';

import Toolbar from './components/Toolbar';
import ChallengeFormGroup from './components/ChallengeFormGroup';

export default function ChallengePage() {
    return (
        <Stack className='h-full'>
            <Toolbar />
            <ChallengeFormGroup />
        </Stack>
    );
}
