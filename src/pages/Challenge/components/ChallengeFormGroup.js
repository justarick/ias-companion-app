import React from 'react';

import { Stack } from '@mui/material';

import ChallengeRatingForm from './ChallengeRatingForm';
import PoolCalculatorForm from './PoolCalculatorForm';
import DiceRollForm from './DiceRollForm';
import SacrificeAndResultForm from './SacrificeAndResultForm';
import ChallengeResult from './ChallengeResult';

export default function ChallengeFormGroup() {
    return (
        <Stack className='h-full flex flex-col justify-between'>
            <Stack
                direction='row'
                className='flex justify-around'>
                <ChallengeRatingForm />
                <PoolCalculatorForm />
                <DiceRollForm />
                <SacrificeAndResultForm />
            </Stack>
            <ChallengeResult />
        </Stack>
    );
}
