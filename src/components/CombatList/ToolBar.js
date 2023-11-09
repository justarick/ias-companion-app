import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    combatMemberSelectors,
    addMember,
    nextMember,
    previousMember,
    removeAllMembers,
    resetActiveMemberIndex,
} from '../../store/combatMemberSlice';
import { createCombatMember } from '../../domain/CombatMember';

function ToolBar() {
    const dispatch = useDispatch();
    const combatMemberCount = useSelector(combatMemberSelectors.selectTotal);
    const ids = useSelector(combatMemberSelectors.selectIds);

    const addCombatMember = () => {
        if (combatMemberCount === 0) {
            const newMember = createCombatMember(1);

            dispatch(addMember(newMember));
        } else {
            const id = Math.max(...ids) + 1;
            const newMember = createCombatMember(id);

            dispatch(addMember(newMember));
        }
    };

    return (
        <div>
            <button onClick={() => dispatch(previousMember())}>
                Vorheriger
            </button>
            <button
                onClick={() => {
                    dispatch(removeAllMembers());
                    dispatch(resetActiveMemberIndex());
                }}>
                Zurücksetzen
            </button>
            <button onClick={addCombatMember}>Hinzufügen</button>
            <button onClick={() => dispatch(nextMember())}>Nächster</button>
        </div>
    );
}

export default ToolBar;
