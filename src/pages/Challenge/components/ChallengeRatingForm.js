import React from 'react';

import { useDispatch } from 'react-redux';

import { Divider } from '@mui/material';

import { updateChallengeRating } from '../../../store/challengeCalculatorSlice';

import ChallengeFormField from './ChallengeFormField';

export default function ChallengeRatingForm() {
    const dispatch = useDispatch();

    const changeChallengeRating = (newValue) => {
        dispatch(updateChallengeRating(newValue));
    };

    return (
        <div>
            <Divider textAlign='left'>Schwierigkeit</Divider>
            <ChallengeFormField
                type='counter'
                label='Schwierigkeit'
                changeValue={changeChallengeRating}
            />
        </div>
    );
}
