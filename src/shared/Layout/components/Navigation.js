import React from 'react';

import { Box, Stack } from '@mui/material';

import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import NavLink from './NavLink';
import { Home } from '@mui/icons-material';

export default function Navigation() {
    const path = useLocation().pathname;

    const isActive = (page) => {
        return page === path;
    };

    return (
        <Stack className='flex justify-between bg-black'>
            <Stack>
                <NavLink
                    to='/'
                    isActive={isActive}
                    icon={<HomeIcon fontSize='large' />}
                />
                <NavLink
                    to='/challenge'
                    isActive={isActive}
                    icon={<CalculateIcon fontSize='large' />}
                />
                <NavLink
                    to='/combat'
                    isActive={isActive}
                    icon={<FormatListBulletedIcon fontSize='large' />}
                />
                <NavLink
                    to='/characters'
                    isActive={isActive}
                    icon={<PersonIcon fontSize='large' />}
                />
                <NavLink
                    to='/items'
                    isActive={isActive}
                    icon={<HandymanIcon fontSize='large' />}
                />
                <NavLink
                    to='/groups'
                    isActive={isActive}
                    icon={<GroupsIcon fontSize='large' />}
                />
            </Stack>
            <NavLink
                to='/settings'
                isActive={isActive}
                icon={<SettingsIcon fontSize='large' />}
            />
        </Stack>
    );
}
