import React from 'react';
import { useDispatch } from 'react-redux';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IconButton } from '@mui/material';
import { resetChallengeCalculator } from '../../../store/challengeCalculatorSlice';

export default function Toolbar() {
    const dispatch = useDispatch();

    const reset = () => {
        dispatch(resetChallengeCalculator());
    };

    return (
        <div className='flex justify-around'>
            <IconButton
                color='error'
                onClick={reset}>
                <RestartAltIcon fontSize='large' />
            </IconButton>
        </div>
    );
}
