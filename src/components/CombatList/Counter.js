import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';

export default function Counter({ value, changeValue }) {
    return (
        <div className='flex flex-row justify-evenly items-center'>
            <IconButton
                color='error'
                onClick={() => changeValue(value - 1)}>
                <RemoveCircleOutlineIcon />
            </IconButton>
            <p className='font-bold text-3xl'>{value}</p>
            <IconButton
                color='success'
                onClick={() => changeValue(value + 1)}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    );
}
