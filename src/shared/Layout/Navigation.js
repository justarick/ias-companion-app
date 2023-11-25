import React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function Navigation() {
    return (
        <div className='flex flex-col'>
            <Link to='/'>
                <IconButton>
                    <HomeIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/challenge'>
                <IconButton>
                    <CalculateIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/combat'>
                <IconButton>
                    <FormatListBulletedIcon fontSize='large' />
                </IconButton>
            </Link>
        </div>
    );
}
