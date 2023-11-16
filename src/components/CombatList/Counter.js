import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { ButtonGroup, IconButton } from '@mui/material';

export default function Counter({ value, changeValue }) {
    return (
        <div className='flex flex-row justify-evenly items-center'>
            <p className='font-bold text-3xl'>{value}</p>
            <ButtonGroup className='flex flex-col'>
                <IconButton
                    color='success'
                    onClick={() => changeValue(value + 1)}>
                    <AddCircleOutlineIcon />
                </IconButton>
                <IconButton
                    color='error'
                    onClick={() => changeValue(value - 1)}>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </ButtonGroup>
        </div>
    );
}
