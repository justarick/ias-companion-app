import React from 'react';

import { Stack } from '@mui/material';

import { useSelector } from 'react-redux';

import { yellow } from '@mui/material/colors';

export default function ChallengeResult() {
    const challengeResult = useSelector(
        (state) => state.challengeCalculatorSlice.challengeResult
    );

    return (
        <Stack
            className='p-2 font-bold text-2xl text-center'
            sx={{
                backgroundColor: yellow[600],
            }}>
            <p>{challengeResult}</p>
        </Stack>
    );
}
