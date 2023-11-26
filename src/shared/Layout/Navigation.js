import React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';

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
            <Link to='/characters'>
                <IconButton>
                    <PersonIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/items'>
                <IconButton>
                    <HandymanIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/groups'>
                <IconButton>
                    <GroupsIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/settings'>
                <IconButton>
                    <SettingsIcon fontSize='large' />
                </IconButton>
            </Link>
        </div>
    );
}
