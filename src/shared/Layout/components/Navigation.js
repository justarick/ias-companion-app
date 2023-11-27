import React, { useState } from 'react';

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
    const [activePage, setActivePage] = useState('home');

    const isActive = (page) => {
        return page === activePage ? 'primary' : 'default';
    };

    return (
        <div className='flex flex-col content-end'>
            <Link to='/'>
                <IconButton
                    color={isActive('home')}
                    onClick={() => setActivePage('home')}>
                    <HomeIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/challenge'>
                <IconButton
                    color={isActive('challenge')}
                    onClick={() => setActivePage('challenge')}>
                    <CalculateIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/combat'>
                <IconButton
                    color={isActive('combat')}
                    onClick={() => setActivePage('combat')}>
                    <FormatListBulletedIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/characters'>
                <IconButton
                    color={isActive('characters')}
                    onClick={() => setActivePage('characters')}>
                    <PersonIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/items'>
                <IconButton
                    color={isActive('items')}
                    onClick={() => setActivePage('items')}>
                    <HandymanIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/groups'>
                <IconButton
                    color={isActive('groups')}
                    onClick={() => setActivePage('groups')}>
                    <GroupsIcon fontSize='large' />
                </IconButton>
            </Link>
            <Link to='/settings'>
                <IconButton
                    color={isActive('settings')}
                    onClick={() => setActivePage('settings')}>
                    <SettingsIcon fontSize='large' />
                </IconButton>
            </Link>
        </div>
    );
}
