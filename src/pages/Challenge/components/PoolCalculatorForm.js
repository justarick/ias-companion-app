import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    updateBuildPoolManually,
    updatePool,
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

import { Divider, FormControlLabel, Checkbox } from '@mui/material';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import ChallengeFormField from './ChallengeFormField';

export default function PoolCalculatorForm() {
    const dispatch = useDispatch();

    const store = useSelector((state) => state.challengeCalculatorSlice);

    const changeSimpleMode = () => {
        dispatch(updateBuildPoolManually());
    };

    const changePool = (newValue) => {
        dispatch(updatePool(newValue));
        dispatch(calculateRestPool());
        dispatch(calculateResult());
        dispatch(updateChallengeResult());
    };

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
        <div className='w-1/5'>
            <div className='flex flex-row bg-black text-yellow-400'>
                <LooksTwoIcon />
                <Divider
                    className='font-semibold'
                    variant='middle'
                    textAlign='left'>
                    Pool bauen
                </Divider>
                <Checkbox
                    checked={store.simpleMode}
                    onChange={changeSimpleMode}
                    sx={{
                        padding: '0',
                        color: 'rgb(250 204 21)',
                        '&.Mui-checked': { color: 'rgb(250 204 21)' },
                    }}
                />
            </div>
            {store.buildPoolManually ? (
                <>
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
                </>
            ) : (
                <ChallengeFormField
                    type='counter'
                    label='Pool'
                    value={store.pool}
                    changeValue={changePool}
                />
            )}
        </div>
    );
}
