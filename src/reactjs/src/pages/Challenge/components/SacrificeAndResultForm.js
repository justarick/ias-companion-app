import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    updateSacrificeValue,
    calculateResult,
    updateChallengeResult,
} from '../../../store/challengeCalculatorSlice';

import { Stack, Divider } from '@mui/material';

import { red, yellow } from '@mui/material/colors';

import Looks4Icon from '@mui/icons-material/Looks4';
import ChallengeFormField from './ChallengeFormField';

export default function SacrificeAndResultForm() {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.challengeCalculatorSlice);

    const changeSacrificeValue = (newValue) => {
        dispatch(updateSacrificeValue(newValue));
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
                <Looks4Icon fontSize='large' />
                <p>Opfern und Ergebnis</p>
            </Stack>
            <Stack>
                <ChallengeFormField
                    type='counter'
                    label='Opferwert'
                    value={state.sacrificeValue}
                    changeValue={changeSacrificeValue}
                />
                <ChallengeFormField
                    type='display'
                    label='Ergebnis'
                    value={state.result}
                />
            </Stack>
        </Stack>
    );
}
