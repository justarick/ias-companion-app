import { useSelector } from 'react-redux/es/hooks/useSelector';
import { combatMemberSelectors } from '../../store/combatMemberSlice';

import CombatTableRow from './CombatTableRow';
import CombatTableHeader from './CombatTableHeader';

export default function CombatTable() {
    const combatMembers = useSelector(combatMemberSelectors.selectEntities);

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
        <div>
            <table className='w-3/5'>
                <thead>
                    <CombatTableHeader />
                </thead>
                <tbody>{combatMemberRows}</tbody>
            </table>
        </div>
    );
}
