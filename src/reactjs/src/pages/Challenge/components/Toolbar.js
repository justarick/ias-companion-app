import React from 'react';

import { useDispatch } from 'react-redux';

import { Box, Fab, IconButton, Stack } from '@mui/material';

import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { resetChallengeCalculator } from '../../../store/challengeCalculatorSlice';
import { red } from '@mui/material/colors';
import ToolbarButton from '../../../shared/components/ToolbarButton';

export default function Toolbar() {
    const dispatch = useDispatch();

    const reset = () => {
        dispatch(resetChallengeCalculator());
    };

    return (
        <Stack
            className='flex justify-evenly bg-black'
            direction='row'>
            <ToolbarButton
                color={red[600]}
                icon={<RestartAltIcon fontSize='large' />}
                onClick={reset}
            />
        </Stack>
    );
}
