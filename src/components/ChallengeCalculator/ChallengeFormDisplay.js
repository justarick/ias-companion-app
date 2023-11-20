import React from 'react';

export default function ChallengeFormDisplay({ label, value }) {
    return (
        <div className='mb-4 flex flex-row justify-between'>
            <label htmlFor={label}>{label}</label>
            <p id={label}>{value}</p>
        </div>
    );
}
