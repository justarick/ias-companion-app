import React from 'react';
import { Table, TableContainer } from '@mui/material';
import CombatTableHead from './CombatTableHead';
import CombatTableBody from './CombatTableBody';


export default function CombatTable() {
    return (
        <TableContainer>
            <Table>
                <CombatTableHead />
                <CombatTableBody />
            </Table>
        </TableContainer>
    );
}
