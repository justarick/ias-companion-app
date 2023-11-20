import React from 'react';
import { TextField } from '@mui/material';

export default function ChallengeFormText({ label, value, changeValue }) {
    return (
        <div className='mb-4 flex flex-row justify-between align-middle'>
            <label htmlFor={label}>{label}</label>
            <TextField
                id={label}
                variant='standard'
                value={value}
                onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    changeValue(newValue);
                }}
            />
        </div>
    );
}
