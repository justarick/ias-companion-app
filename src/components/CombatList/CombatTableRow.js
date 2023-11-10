import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    combatMemberSelectors,
    updateMember,
} from '../../store/combatMemberSlice';

import Counter from './Counter';

export default function CombatTableRow({ combatMember }) {
    const dispatch = useDispatch();
    const activeMemberId = useSelector(
        combatMemberSelectors.selectActiveMemberId
    );
    const isActive = combatMember.id === activeMemberId ? 'true' : '';

    const changeName = (e) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { name: e.target.value },
            })
        );
    };

    const changeHealth = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { health: newValue },
            })
        );
    };

    const changeStamina = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { stamina: newValue },
            })
        );
    };

    const changeMorale = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { morale: newValue },
            })
        );
    };

    const changeDramaPoints = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { dramaPoints: newValue },
            })
        );
    };

    const changeArmorPoints = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { armorPoints: newValue },
            })
        );
    };

    const changeStatusEffects = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { statusEffects: newValue },
            })
        );
    };

    const changeAmmunition = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { ammunition: newValue },
            })
        );
    };

    const changeAdvantages = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { advantages: newValue },
            })
        );
    };

    return (
        <tr>
            <td>{isActive}</td>
            <td>
                <input
                    type='text'
                    value={combatMember.name}
                    onChange={(e) => changeName(e)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.health}
                    changeValue={(newValue) => changeHealth(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.stamina}
                    changeValue={(newValue) => changeStamina(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.morale}
                    changeValue={(newValue) => changeMorale(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.dramaPoints}
                    changeValue={(newValue) => changeDramaPoints(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.armorPoints}
                    changeValue={(newValue) => changeArmorPoints(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.statusEffects}
                    changeValue={(newValue) => changeStatusEffects(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.ammunition}
                    changeValue={(newValue) => changeAmmunition(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.advantages}
                    changeValue={(newValue) => changeAdvantages(newValue)}
                />
            </td>
            <td>
                <input type='checkbox' />
            </td>
        </tr>
    );
}
