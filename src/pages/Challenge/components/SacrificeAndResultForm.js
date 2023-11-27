import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    updateSacrificeValue,
    calculateResult,
    updateChallengeResult,
} from '../../../store/challengeCalculatorSlice';

import { Divider } from '@mui/material';
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
        <div className='w-1/5'>
            <div className='flex flex-row bg-black text-yellow-400'>
                <Looks4Icon />
                <Divider
                    className='font-semibold'
                    variant='middle'
                    textAlign='left'>
                    Opfern und Ergebnis
                </Divider>
            </div>
            <ChallengeFormField
                type='counter'
                label='Opferwert'
                value={state.sacrificeValue}
                changeValue={changeSacrificeValue}
            />
            <ChallengeFormField
                className='bg-yellow-400 font-bold'
                type='display'
                label='Ergebnis'
                value={state.result}
            />
        </div>
    );
}
