import React from 'react';
import { TextField } from '@mui/material';

export default function ChallengeFormCounter({
    className,
    label,
    value,
    changeValue,
}) {
    return (
        <div
            className={
                'mb-4 flex flex-row justify-between align-middle' + className
            }>
            <label htmlFor={label}>{label}</label>
            <TextField
                id={label}
                variant='standard'
                type='number'
                value={value}
                onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    changeValue(newValue);
                }}
            />
        </div>
    );
}
