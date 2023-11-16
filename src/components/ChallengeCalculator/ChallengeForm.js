import { TextField } from '@mui/material';
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

export default function ChallengeForm() {
    const dispatch = useDispatch();
    const slice = useSelector(challengeCalculatorSelectors.slice);

    return (
        <form className='flex flex-col mt-2'>
            <TextField
                id='challenge-rating'
                label='Schwierigkeit'
                variant='outlined'
                value={slice.challangeRating}
                onChange={(e) => {
                    const newChallangeRating = parseInt(e.target.value);
                    dispatch(updateChallangeRating(newChallangeRating));
                    dispatch(calculateInterimResult());
                }}
            />
            <TextField
                id='attribute'
                label='Attribut'
                variant='outlined'
                value={slice.attribute}
                onChange={(e) => {
                    const newAttribute = parseInt(e.target.value);
                    dispatch(updateAttribute(newAttribute));
                    dispatch(calculatePool());
                }}
            />
            <TextField
                id='attribute-skill'
                label='Attribut / Fertigkeit'
                variant='outlined'
                value={slice.skill}
                onChange={(e) => {
                    const newSkill = parseInt(e.target.value);
                    dispatch(updateSkill(newSkill));
                    dispatch(calculatePool());
                }}
            />
            <TextField
                id='bonus'
                label='Ausrüstungsbonus'
                variant='outlined'
                value={slice.bonus}
                onChange={(e) => {
                    const newBonus = parseInt(e.target.value);
                    dispatch(updateBonus(newBonus));
                    dispatch(calculatePool());
                }}
            />
            <TextField
                id='advantage'
                label='Vorteil'
                variant='outlined'
                value={slice.advantage}
                onChange={(e) => {
                    const newAdvantage = parseInt(e.target.value);
                    dispatch(updateAdvantage(newAdvantage));
                    dispatch(calculatePool());
                }}
            />
            <TextField
                id='status-effect'
                label='Statuseffekte'
                variant='outlined'
                value={slice.statusEffects}
                onChange={(e) => {
                    const newStatusEffect = parseInt(e.target.value);
                    dispatch(updateStatusEffects(newStatusEffect));
                    dispatch(calculatePool());
                }}
            />
            <TextField
                id='pool'
                label='Pool'
                variant='outlined'
                value={slice.pool}
                onChange={(e) => {
                    const newPool = parseInt(e.target.value);
                    dispatch(updatePool(newPool));
                    dispatch(calculateRestPool());
                }}
            />
            <TextField
                id='dice'
                label='Würfel'
                variant='outlined'
                value={slice.dice}
                onChange={(e) => {
                    const newDice = parseInt(e.target.value);
                    dispatch(updateDice(newDice));
                    dispatch(calculateRestPool());
                    dispatch(calculateInterimResult());
                }}
            />
            <div className='flex flex-row justify-between'>
                <label htmlFor='rest-pool'>Restpool</label>
                <p id='rest-pool'>{slice.restPool}</p>
            </div>
            <TextField
                id='dice-result'
                label='Würfelergebnis'
                variant='outlined'
                value={slice.diceResult}
                onChange={(e) => {
                    const newDiceResult = parseInt(e.target.value);
                    dispatch(updateDiceResult(newDiceResult));
                    dispatch(calculateInterimResult());
                }}
            />
            <div className='flex flex-row justify-between bg-yellow-400 font-bold'>
                <label htmlFor='interim-result'>Zwischenergebnis</label>
                <p id='interim-result'>{slice.interimResult}</p>
            </div>
            <TextField
                id='sacrifice'
                label='Opferwert'
                variant='outlined'
                value={slice.sacrifice}
                onChange={(e) => {
                    const newSacrifice = parseInt(e.target.value);
                    dispatch(updateSacrifice(newSacrifice));
                    dispatch(calculateResult());
                }}
            />
            <div className='flex flex-row justify-between bg-yellow-600 font-bold'>
                <label htmlFor='result'>Ergebnis</label>
                <p id='result'>{slice.result}</p>
            </div>
        </form>
    );
}
