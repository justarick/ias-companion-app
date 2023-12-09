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
import {
    amber,
    blue,
    blueGrey,
    brown,
    green,
    grey,
    orange,
    purple,
    red,
    yellow,
} from '@mui/material/colors';

export default function CombatTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell
                    align='center'
                    style={{ backgroundColor: blueGrey[400] }}>
                    <FormatListNumberedIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: grey[600] }}>
                    <PersonIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: red[600] }}>
                    <HealthAndSafetyIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: blue[600] }}>
                    <DirectionsRunIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: green[600] }}>
                    <SpaIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: purple[600] }}>
                    <TheaterComedyIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: orange[600] }}>
                    <SelfImprovementIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: brown[400] }}>
                    <ImportExportIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: amber[600] }}>
                    <ShieldIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: yellow[600] }}>
                    <GamesIcon />
                </TableCell>
                <TableCell
                    align='center'
                    style={{ backgroundColor: red[600] }}>
                    <ExitToAppIcon />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}
