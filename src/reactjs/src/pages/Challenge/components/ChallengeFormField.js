import React from 'react';
import { Stack, TextField } from '@mui/material';

const ChallengeFormCounter = ({ label, value, changeValue }) => {
    return (
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
    );
};

const ChallengeFormDisplay = ({ label, value }) => {
    return <p id={label}>{value}</p>;
};

export default function ChallengeFormField({
    type = 'display',
    label = 'Label',
    value = 0,
    changeValue = () => {},
}) {
    let element;

    if (value === null) value = 0;

    if (type === 'display') {
        element = (
            <ChallengeFormDisplay
                label={label}
                value={value}
            />
        );
    } else if (type === 'counter') {
        element = (
            <ChallengeFormCounter
                label={label}
                value={value}
                changeValue={changeValue}
            />
        );
    } else {
        element = <div>Invalid type</div>;
    }

    return (
        <Stack
            direction={'row'}
            className={
                'mb-2 p-2 flex flex-row justify-between align-middle hover:bg-gray-300 '
            }>
            <label htmlFor={label}>{label}</label>
            <div className='w-1/3'>{element}</div>
        </Stack>
    );
}
