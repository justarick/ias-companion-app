import React from 'react';

import Toolbar from './components/Toolbar';
import ChallengeFormGroup from './components/ChallengeFormGroup';

export default function ChallengePage() {
    return (
        <div className='w-full'>
            <Toolbar />
            <ChallengeFormGroup />
        </div>
    );
}
