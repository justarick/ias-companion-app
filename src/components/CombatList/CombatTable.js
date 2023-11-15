import { useSelector } from 'react-redux/es/hooks/useSelector';
import { combatMemberSelectors } from '../../store/combatMemberSlice';

import CombatTableRow from './CombatTableRow';
import CombatTableHeader from './CombatTableHeader';

export default function CombatTable() {
    const combatMembers = useSelector(combatMemberSelectors.selectAll);

    let combatMemberRows = [];

    for (const id in combatMembers) {
        const combatMember = combatMembers[id];
        combatMemberRows.push(
            <CombatTableRow
                key={combatMember.id}
                combatMember={combatMember}
            />
        );
    }

    return (
        <table className='w-full border-separate border-spacing-x-0 border-spacing-y-4'>
            <CombatTableHeader />
            <tbody>{combatMemberRows}</tbody>
        </table>
    );
}
