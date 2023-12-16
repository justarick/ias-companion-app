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

import { Divider, Checkbox, Stack } from '@mui/material';

import { yellow } from '@mui/material/colors';

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
        <Stack className='w-1/5'>
            <Stack
                direction={'row'}
                className='flex align-middle font-semibold text-2xl'
                sx={{
                    color: yellow[600],
                    backgroundColor: 'black',
                }}>
                <LooksTwoIcon fontSize='large' />
                <p>Pool bauen</p>
                <Checkbox
                    checked={store.simpleMode}
                    onChange={changeSimpleMode}
                    size='large'
                    sx={{
                        padding: '0',
                        color: yellow[600],
                        '&.Mui-checked': { color: yellow[600] },
                    }}
                />
            </Stack>
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
        </Stack>
    );
}
