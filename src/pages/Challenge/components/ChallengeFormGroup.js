import React from 'react';
import ChallengeRatingForm from './ChallengeRatingForm';
import PoolCalculatorForm from './PoolCalculatorForm';
import DiceRollForm from './DiceRollForm';
import SacrificeAndResultForm from './SacrificeAndResultForm';

export default function ChallengeFormGroup() {
    return (
        <div className='flex flex-row justify-between'>
            <ChallengeRatingForm />
            <PoolCalculatorForm />
            <DiceRollForm />
            <SacrificeAndResultForm />
        </div>
    );
}
