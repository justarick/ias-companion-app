import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {
    combatMemberSelectors,
    updateMember,
    removeMember,
} from '../../store/combatMemberSlice';

function CombatTableRow({ combatMember }) {
    const dispatch = useDispatch();
    const activeMemberId = useSelector(
        combatMemberSelectors.selectActiveMemberId
    );
    const isActive = combatMember.id === activeMemberId ? 'true' : '';

    return (
        <tr>
            <td>{isActive}</td>
            <td>
                <input
                    type='text'
                    value={combatMember.name}
                    onChange={(e) =>
                        dispatch(
                            updateMember({
                                id: combatMember.id,
                                changes: { name: e.target.value },
                            })
                        )
                    }
                />
            </td>
            <td>{combatMember.health}</td>
            <td>{combatMember.stamina}</td>
            <td>{combatMember.morale}</td>
            <td>{combatMember.dramaPoints}</td>
            <td>{combatMember.baseDamage}</td>
            <td>{combatMember.armorValue}</td>
            <td>{combatMember.armorPoints}</td>
            <td>{combatMember.statusEffects}</td>
            <td>{combatMember.ammunition}</td>
            <td>{combatMember.advantages}</td>
            <td>
                <input type='checkbox' />
            </td>
            <td>
                <button onClick={() => dispatch(removeMember(combatMember.id))}>
                    X
                </button>
            </td>
        </tr>
    );
}

function CombatTableHeader() {
    return (
        <tr>
            <th>Active</th>
            <th>Name</th>
            <th>Gesundheit</th>
            <th>Ausdauer</th>
            <th>Moral</th>
            <th>Dramapunkte</th>
            <th>Grundschaden</th>
            <th>Rüstungswert</th>
            <th>Rüstungspunkte</th>
            <th>Statuseffekte</th>
            <th>Munition</th>
            <th>Vorteile</th>
            <th>Bezwungen</th>
            <th>Löschen</th>
        </tr>
    );
}

function CombatTable() {
    const combatMembers = useSelector(combatMemberSelectors.selectEntities);
    const count = useSelector(combatMemberSelectors.selectTotal);
    const activeMemberId = useSelector(
        combatMemberSelectors.selectActiveMemberId
    );

    const combatMemberRows = [];

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
            {/* <h3>
                Count: {count} | Active Member: {activeMemberId}
            </h3> */}
            <table>
                <thead>
                    <CombatTableHeader />
                </thead>
                <tbody>{combatMemberRows}</tbody>
            </table>
        </div>
    );
}

export default CombatTable;
