import React from 'react';
import { useDispatch } from 'react-redux';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Fab } from '@mui/material';
import { resetChallengeCalculator } from '../../store/challengeCalculatorSlice';

export default function CalculatorToolbar() {
    const dispatch = useDispatch();

    return (
        <div className='flex justify-evenly'>
            <Fab
                color='error'
                onClick={() => dispatch(resetChallengeCalculator())}>
                <RestartAltIcon fontSize='large' />
            </Fab>
        </div>
    );
}
