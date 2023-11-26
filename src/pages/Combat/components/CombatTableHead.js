import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SpaIcon from '@mui/icons-material/Spa';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ShieldIcon from '@mui/icons-material/Shield';
import PersonIcon from '@mui/icons-material/Person';
import GamesIcon from '@mui/icons-material/Games';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export default function CombatTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell align='center'>
                    <FormatListNumberedIcon />
                </TableCell>
                <TableCell
                    className='bg-gray-500'
                    align='center'>
                    <PersonIcon />
                </TableCell>
                <TableCell
                    className='bg-red-500'
                    align='center'>
                    <HealthAndSafetyIcon />
                </TableCell>
                <TableCell
                    className='bg-blue-500'
                    align='center'>
                    <DirectionsRunIcon />
                </TableCell>
                <TableCell
                    className='bg-green-500'
                    align='center'>
                    <SpaIcon />
                </TableCell>
                <TableCell
                    className='bg-purple-500'
                    align='center'>
                    <TheaterComedyIcon />
                </TableCell>
                <TableCell
                    className='bg-orange-500'
                    align='center'>
                    <SelfImprovementIcon />
                </TableCell>
                <TableCell
                    className='bg-stone-500'
                    align='center'>
                    <ImportExportIcon />
                </TableCell>
                <TableCell
                    className='bg-yellow-600'
                    align='center'>
                    <ShieldIcon />
                </TableCell>
                <TableCell
                    className='bg-yellow-400'
                    align='center'>
                    <GamesIcon />
                </TableCell>
                <TableCell
                    className='bg-red-500'
                    align='center'>
                    <ExitToAppIcon />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}
