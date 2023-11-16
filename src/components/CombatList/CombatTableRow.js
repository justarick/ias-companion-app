import React from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    updateMember,
    removeMember,
    switchCombatMemberIdIndices,
} from '../../store/combatMemberSlice';
import Counter from './Counter';
import { ButtonGroup, IconButton } from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { red } from '@mui/material/colors';

export default function CombatTableRow(props) {
    const dispatch = useDispatch();
    const combatMember = props.combatMember;
    const activeCombatMemberId = useSelector(
        (state) => state.combatMemberSlice.activeCombatMemberId
    );
    const isActive = combatMember.id === activeCombatMemberId;

    const changeInitiative = (direction) => {
        dispatch(
            switchCombatMemberIdIndices({ id: combatMember.id, direction })
        );
    };

    const changeName = (newValue) => {
        dispatch(
            updateMember({ id: combatMember.id, changes: { name: newValue } })
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
                <ButtonGroup orientation='vertical'>
                    <IconButton onClick={() => changeInitiative('up')}>
                        <ArrowDropUpIcon />
                    </IconButton>
                    <IconButton onClick={() => changeInitiative('down')}>
                        <ArrowDropDownIcon />
                    </IconButton>
                </ButtonGroup>
            </td>
            <td>
                <div className='flex justify-center align-middle'>
                    <input
                        type='text'
                        placeholder='Name'
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
