import { Divider, TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    updateChallangeRating,
    updateAttribute,
    updateSkill,
    updateBonus,
    updateAdvantage,
    updateStatusEffects,
    calculatePool,
    updateDice,
    calculateRestPool,
    updateDiceResult,
    calculateInterimResult,
    updateSacrifice,
    calculateResult,
    challengeCalculatorSelectors,
    updatePool,
} from '../../store/challengeCalculatorSlice';
import ChallengeFormCounter from './ChallengeFormCounter';
import ChallengeFormText from './ChallengeFormText';
import ChallengeFormDisplay from './ChallengeFormDisplay';

export default function ChallengeForm() {
    const dispatch = useDispatch();
    const slice = useSelector(challengeCalculatorSelectors.slice);

    const changeChallangeRating = (newValue) => {
        dispatch(updateChallangeRating(newValue));
        dispatch(calculateInterimResult());
    };

    const changeAttribute = (newValue) => {
        dispatch(updateAttribute(newValue));
        dispatch(calculatePool());
    };

    const changeSkill = (newValue) => {
        dispatch(updateSkill(newValue));
        dispatch(calculatePool());
    };

    const changeBonus = (newValue) => {
        dispatch(updateBonus(newValue));
        dispatch(calculatePool());
    };

    const changeAdvantage = (newValue) => {
        dispatch(updateAdvantage(newValue));
        dispatch(calculatePool());
    };

    const changeStatusEffects = (newValue) => {
        dispatch(updateStatusEffects(newValue));
        dispatch(calculatePool());
    };

    const changePool = (newValue) => {
        dispatch(updatePool(newValue));
        dispatch(calculateRestPool());
    };

    const changeDice = (newValue) => {
        dispatch(updateDice(newValue));
        dispatch(calculateRestPool());
        dispatch(calculateInterimResult());
    };

    const changeDiceResult = (newValue) => {
        dispatch(updateDiceResult(newValue));
        dispatch(calculateInterimResult());
    };

    const changeSacrifice = (newValue) => {
        dispatch(updateSacrifice(newValue));
        dispatch(calculateResult());
    };

    return (
        <form className='flex flex-col mt-2'>
            <div className='font-bold'>
                <ChallengeFormText
                    label='Schwierigkeit'
                    value={slice.challangeRating}
                    changeValue={changeChallangeRating}
                />
            </div>
            <ChallengeFormCounter
                label='Attribut'
                value={slice.attribute}
                changeValue={changeAttribute}
            />
            <ChallengeFormCounter
                label='Attribut / Fertigkeit'
                value={slice.skill}
                changeValue={changeSkill}
            />
            <ChallengeFormCounter
                label='Ausrüstungsbonus'
                value={slice.bonus}
                changeValue={changeBonus}
            />
            <ChallengeFormCounter
                label='Vorteil'
                value={slice.advantage}
                changeValue={changeAdvantage}
            />
            <ChallengeFormCounter
                label='Statuseffekte'
                value={slice.statusEffects}
                changeValue={changeStatusEffects}
            />
            <div className='font-bold'>
                <ChallengeFormText
                    className='font-bold'
                    label='Pool'
                    value={slice.pool}
                    changeValue={changePool}
                />
            </div>
            <ChallengeFormCounter
                label='Würfel +1'
                value={slice.dice}
                changeValue={changeDice}
            />
            <ChallengeFormDisplay
                label='Restpool'
                value={slice.restPool}
            />
            <ChallengeFormCounter
                label='Würfelergebnis'
                value={slice.diceResult}
                changeValue={changeDiceResult}
            />
            <div className='bg-yellow-400 font-bold'>
                <ChallengeFormDisplay
                    label='Zwischenergebnis'
                    value={slice.interimResult}
                />
            </div>
            <ChallengeFormCounter
                label='Opferwert'
                value={slice.sacrifice}
                changeValue={changeSacrifice}
            />
            <div className='bg-yellow-600 font-bold'>
                <ChallengeFormDisplay
                    label='Ergebnis'
                    value={slice.result}
                />
            </div>
        </form>
    );
}
