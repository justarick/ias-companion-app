import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

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
        <div>
            <div className='flex flex-row bg-yellow-400'>
                <Looks3Icon />
                <Divider
                    className='font-semibold'
                    variant='middle'
                    textAlign='left'>
                    Würfeln
                </Divider>
            </div>
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
        </div>
    );
}
