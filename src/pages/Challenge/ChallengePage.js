import React from 'react';

import Toolbar from './components/Toolbar';
import ChallengeFormGroup from './components/ChallengeFormGroup';
import ChallengeResult from './components/ChallengeResult';

export default function ChallengePage() {
    return (
        <div className='w-full flex flex-col'>
            <Toolbar />
            <ChallengeFormGroup />
            <ChallengeResult />
        </div>
    );
}
