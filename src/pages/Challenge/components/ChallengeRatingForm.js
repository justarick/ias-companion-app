import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Divider } from '@mui/material';
import LooksOneIcon from '@mui/icons-material/LooksOne';

import {
    calculateResult,
    updateChallengeRating,
    updateChallengeResult,
} from '../../../store/challengeCalculatorSlice';

import ChallengeFormField from './ChallengeFormField';

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
        <div className='w-1/5'>
            <div className='flex flex-row bg-black text-yellow-400'>
                <LooksOneIcon />
                <Divider
                    className='font-semibold'
                    variant='middle'
                    textAlign='left'>
                    Schwierigkeit festlegen
                </Divider>
            </div>
            <ChallengeFormField
                type='counter'
                label='Schwierigkeit'
                value={value}
                changeValue={changeChallengeRating}
            />
        </div>
    );
}
