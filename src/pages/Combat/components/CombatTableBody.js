import React from 'react';
import { TableBody } from '@mui/material';

import { useSelector } from 'react-redux/es/hooks/useSelector';

import CombatTableRow from './CombatTableRow';

export default function CombatTableBody() {
    const combatMemberIds = useSelector((state) => state.combatMemberSlice.ids);
    return (
        <TableBody>
            {combatMemberIds.map((id) => (
                <CombatTableRow
                    key={id}
                    combatMemberId={id}
                />
            ))}
        </TableBody>
    );
}
