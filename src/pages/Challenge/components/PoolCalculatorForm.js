import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    updateAttribute,
    updateSkill,
    updateBonus,
    updateAdvantageCount,
    updateStatusEffectCount,
    calculatePool,
    calculateRestPool,
    calculateResult,
    updateChallengeResult,
} from '../../../store/challengeCalculatorSlice';

import { Divider } from '@mui/material';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import ChallengeFormField from './ChallengeFormField';

export default function PoolCalculatorForm() {
    const dispatch = useDispatch();
    const store = useSelector((state) => state.challengeCalculatorSlice);

    const changeAttribute = (newValue) => {
        dispatch(updateAttribute(newValue));
        dispatch(calculatePool());
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    const changeSkill = (newValue) => {
        dispatch(updateSkill(newValue));
        dispatch(calculatePool());
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    const changeBonus = (newValue) => {
        dispatch(updateBonus(newValue));
        dispatch(calculatePool());
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    const changeAdvantageCount = (newValue) => {
        dispatch(updateAdvantageCount(newValue));
        dispatch(calculatePool());
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    const changeStatusEffectCount = (newValue) => {
        dispatch(updateStatusEffectCount(newValue));
        dispatch(calculatePool());
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

    return (
        <div>
            <div className='flex flex-row bg-yellow-400'>
                <LooksTwoIcon />
                <Divider
                    className='font-semibold'
                    variant='middle'
                    textAlign='left'>
                    Pool bauen
                </Divider>
            </div>
            <ChallengeFormField
                type='counter'
                label='Attribut'
                value={store.attribute}
                changeValue={changeAttribute}
            />
            <ChallengeFormField
                type='counter'
                label='Attribut / Fertigkeit'
                labelExtension='+'
                value={store.skill}
                changeValue={changeSkill}
            />
            <ChallengeFormField
                type='counter'
                label='Ausrüstungsbonus'
                labelExtension='+'
                value={store.bonus}
                changeValue={changeBonus}
            />
            <ChallengeFormField
                type='counter'
                label='Vorteil'
                labelExtension='+'
                value={store.advantageCount}
                changeValue={changeAdvantageCount}
            />
            <ChallengeFormField
                type='counter'
                label='Statuseffekte'
                labelExtension='-'
                value={store.statusEffectCount}
                changeValue={changeStatusEffectCount}
            />
            <ChallengeFormField
                type='display'
                label='Pool'
                labelExtension='='
                value={store.pool}
            />
        </div>
    );
}
