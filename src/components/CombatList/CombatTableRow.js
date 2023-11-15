import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    combatMemberSelectors,
    updateMember,
    removeMember,
    swapMemberIds,
} from '../../store/combatMemberSlice';
import Counter from './Counter';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { red } from '@mui/material/colors';

export default function CombatTableRow(props) {
    const dispatch = useDispatch();
    const combatMember = props.combatMember;
    const activeMemberId = useSelector(
        combatMemberSelectors.selectActiveMemberId
    );
    const isActive = combatMember.id === activeMemberId;

    const changePosition = (direction) => {
        dispatch(
            swapMemberIds({
                id: combatMember.id,
                direction: direction,
            })
        );
    };

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
        <tr className={isActive ? 'bg-gray-300' : ''}>
            <td>
                <div className='flex flex-col'>
                    <button onClick={() => changePosition('up')}>
                        <ArrowDropUpIcon />
                    </button>
                    <button onClick={() => changePosition('down')}>
                        <ArrowDropDownIcon />
                    </button>
                </div>
            </td>
            <td>
                <div className='flex justify-center align-middle'>
                    <input
                        type='text'
                        className='border border-slate-500'
                        value={combatMember.name}
                        onChange={(e) => changeName(e.target.value)}
                    />
                </div>
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
                <div className='flex justify-center'>
                    <button onClick={() => remove()}>
                        <DisabledByDefaultIcon sx={{ color: red[800] }} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
