import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton } from '@mui/material';

export default function Counter(props) {
    return (
        <div className='flex flex-row justify-evenly items-center'>
            <IconButton
                color='error'
                onClick={() => props.changeValue(props.value - 1)}>
                <RemoveCircleOutlineIcon />
            </IconButton>
            <p className='font-bold text-3xl'>{props.value}</p>
            <IconButton
                color='success'
                onClick={() => props.changeValue(props.value + 1)}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    );
}
