import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { FormControlLabel, IconButton } from '@mui/material';
import {
    updateSimpleMode,
    resetChallengeCalculator,
} from '../../store/challengeCalculatorSlice';
import { Checkbox } from '@mui/material';

export default function CalculatorToolbar() {
    const dispatch = useDispatch();
    const simpleMode = useSelector(
        (state) => state.challengeCalculatorSlice.simpleMode
    );

    const reset = () => {
        dispatch(resetChallengeCalculator());
    };

    const changeSimpleMode = () => {
        dispatch(updateSimpleMode());
    };

    return (
        <div className='flex justify-evenly align-middle'>
            <IconButton
                color='error'
                onClick={reset}>
                <RestartAltIcon fontSize='large' />
            </IconButton>
            <FormControlLabel
                label='Pool bekannt'
                control={
                    <Checkbox
                        checked={simpleMode}
                        onChange={changeSimpleMode}
                    />
                }
            />
        </div>
    );
}
