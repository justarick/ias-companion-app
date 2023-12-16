import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Stack } from '@mui/material';

import { yellow } from '@mui/material/colors';

import {
    updateDiceCount,
    calculateRestPool,
    updateDiceResult,
    calculateResult,
    updateChallengeResult,
} from '../../../store/challengeCalculatorSlice';

import { Divider } from '@mui/material';
import Looks3Icon from '@mui/icons-material/Looks3';

import ChallengeFormField from './ChallengeFormField';

export default function DiceRollForm() {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.challengeCalculatorSlice);

    const changeDiceCount = (newValue) => {
        dispatch(updateDiceCount(newValue));
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    const changeDiceResult = (newValue) => {
        dispatch(updateDiceResult(newValue));
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
                <Looks3Icon fontSize='large' />
                <p>Würfeln</p>
            </Stack>
            <Stack>
                <ChallengeFormField
                    type='counter'
                    label='Würfelanzahl (+1)'
                    value={state.diceCount}
                    changeValue={changeDiceCount}
                />
                <ChallengeFormField
                    type='display'
                    label='Restpool'
                    value={state.restPool}
                />
                <ChallengeFormField
                    type='counter'
                    label='Würfelergebnis'
                    value={state.diceResult}
                    changeValue={changeDiceResult}
                />
            </Stack>
        </Stack>
    );
}
