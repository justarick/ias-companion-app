import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    combatMemberSelectors,
    updateMember,
    removeMember,
} from '../../store/combatMemberSlice';
import Counter from './Counter';
import ClearIcon from '@mui/icons-material/Clear';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

export default function CombatTableRow({ combatMember }) {
    const dispatch = useDispatch();
    const activeMemberId = useSelector(
        combatMemberSelectors.selectActiveMemberId
    );
    const isActive =
        combatMember.id === activeMemberId ? <LabelImportantIcon /> : '';

    const changeName = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { name: newValue },
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

    const changeStatusEffects = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { statusEffects: newValue },
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

    const changeArmorPoints = (newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { armorPoints: newValue },
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

    const remove = () => {
        dispatch(removeMember(combatMember.id));
    };

    return (
        <tr>
            <td>{isActive}</td>
            <td>
                <input
                    type='text'
                    className='border rounded'
                    value={combatMember.name}
                    onChange={(e) => changeName(e.target.value)}
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
                    value={combatMember.statusEffects}
                    changeValue={(newValue) => changeStatusEffects(newValue)}
                />
            </td>
            <td>
                <Counter
                    value={combatMember.advantages}
                    changeValue={(newValue) => changeAdvantages(newValue)}
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
                    value={combatMember.ammunition}
                    changeValue={(newValue) => changeAmmunition(newValue)}
                />
            </td>
            <td>
                <button onClick={() => remove()}>
                    <ClearIcon />
                </button>
            </td>
        </tr>
    );
}
