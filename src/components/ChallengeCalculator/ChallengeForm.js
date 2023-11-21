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
import ChallengeFormField from './ChallengeFormField';
import { Divider } from '@mui/material';

export default function ChallengeForm() {
    const dispatch = useDispatch();
    const state = useSelector(challengeCalculatorSelectors.slice);
    const simpleMode = state.simpleMode;

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

    let poolFields;

    if (simpleMode) {
        poolFields = (
            <ChallengeFormField
                classNameExtension='font-bold'
                type='counter'
                label='Pool'
                value={state.pool}
                changeValue={changePool}
            />
        );
    } else {
        poolFields = (
            <div>
                <ChallengeFormField
                    type='counter'
                    label='Attribut'
                    value={state.attribute}
                    changeValue={changeAttribute}
                />
                <ChallengeFormField
                    type='counter'
                    label='Attribut / Fertigkeit'
                    labelExtension='+'
                    value={state.skill}
                    changeValue={changeSkill}
                />
                <ChallengeFormField
                    type='counter'
                    label='Ausrüstungsbonus'
                    labelExtension='+'
                    value={state.bonus}
                    changeValue={changeBonus}
                />
                <ChallengeFormField
                    type='counter'
                    label='Vorteil'
                    labelExtension='+'
                    value={state.advantage}
                    changeValue={changeAdvantage}
                />
                <ChallengeFormField
                    type='counter'
                    label='Statuseffekte'
                    labelExtension='+'
                    value={state.statusEffects}
                    changeValue={changeStatusEffects}
                />
                <ChallengeFormField
                    classNameExtension='font-bold'
                    type='display'
                    label='Pool'
                    labelExtension='='
                    value={state.pool}
                />
            </div>
        );
    }

    return (
        <form className='mt-2'>
            <ChallengeFormField
                classNameExtension='font-bold'
                type='counter'
                label='Schwierigkeit'
                value={state.challangeRating}
                changeValue={changeChallangeRating}
            />
            <Divider />
            {poolFields}
            <Divider />
            <ChallengeFormField
                type='counter'
                label='Würfel (+1)'
                value={state.dice}
                changeValue={changeDice}
            />
            <Divider />
            <ChallengeFormField
                type='display'
                label='Restpool'
                value={state.restPool}
            />
            <ChallengeFormField
                type='counter'
                label='Würfelergebnis'
                labelExtension='+'
                value={state.diceResult}
                changeValue={changeDiceResult}
            />
            <Divider />
            <ChallengeFormField
                classNameExtension='bg-yellow-400 font-bold'
                type='display'
                label='Zwischenergebnis'
                labelExtension='='
                value={state.interimResult}
            />
            <ChallengeFormField
                type='counter'
                label='Opferwert'
                labelExtension='+'
                value={state.sacrifice}
                changeValue={changeSacrifice}
            />
            <Divider />
            <ChallengeFormField
                classNameExtension='bg-yellow-600 font-bold'
                type='display'
                label='Ergebnis'
                labelExtension='='
                value={state.result}
            />
        </form>
    );
}
