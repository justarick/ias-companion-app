import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Stack, Divider } from '@mui/material';

import LooksOneIcon from '@mui/icons-material/LooksOne';

import ChallengeFormField from './ChallengeFormField';

import {
    calculateResult,
    updateChallengeRating,
    updateChallengeResult,
} from '../../../store/challengeCalculatorSlice';
import { yellow } from '@mui/material/colors';

export default function ChallengeRatingForm() {
    const dispatch = useDispatch();

    const value = useSelector(
        (state) => state.challengeCalculatorSlice.challengeRating
    );

    const changeChallengeRating = (newValue) => {
        dispatch(updateChallengeRating(newValue));
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    return (
        <Stack className='w-1/5'>
            <Stack
                direction={'row'}
                className='flex align-middle font-semibold text-2xl'
                sx={{
                    color: yellow[600],
                    backgroundColor: 'black',
                }}>
                <LooksOneIcon fontSize='large' />
                <p>Schwierigkeit festlegen</p>
            </Stack>
            <Stack>
                <ChallengeFormField
                    type='counter'
                    label='Schwierigkeit'
                    value={value}
                    changeValue={changeChallengeRating}
                />
            </Stack>
        </Stack>
    );
}
