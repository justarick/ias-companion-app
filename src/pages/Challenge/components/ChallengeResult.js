import React from 'react';

import { useSelector } from 'react-redux';

export default function ChallengeResult() {
    const challengeResult = useSelector(
        (state) => state.challengeCalculatorSlice.challengeResult
    );

    return (
        <div className='w-full flex flex-row justify-center'>
            <p className='p-2 bg-yellow-400 font-bold text-2xl'>
                {challengeResult}
            </p>
        </div>
    );
}
