import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    updateMember,
    removeMember,
    switchCombatMemberIdIndices,
    switchActiveCombatMemberId,
} from '../../store/combatMemberSlice';
import Counter from './Counter';
import { ButtonGroup, IconButton } from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '@mui/material/TextField';

export default function CombatTableRow(props) {
    const dispatch = useDispatch();
    const combatMember = props.combatMember;
    const isActive =
        combatMember.id ===
        useSelector((state) => state.combatMemberSlice.activeCombatMemberId);

    const changeInitiative = (direction) => {
        dispatch(
            switchCombatMemberIdIndices({
                id: combatMember.id,
                direction: direction,
            })
        );
    };

    const changeAttributeValue = (attribute, newValue) => {
        dispatch(
            updateMember({
                id: combatMember.id,
                changes: { [attribute]: newValue },
            })
        );
    };

    const remove = () => {
        dispatch(removeMember(combatMember.id));
        if (isActive) dispatch(switchActiveCombatMemberId('next'));
    };

    return (
        <tr className={isActive ? 'bg-blue-300' : 'hover:bg-gray-300'}>
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
                <div className='flex justify-center'>
                    <TextField
                        id='name'
                        variant='standard'
                        placeholder='Name'
                        value={combatMember.name}
                        onChange={(e) =>
                            changeAttributeValue('name', e.target.value)
                        }
                    />
                </div>
            </td>
            <td>
                <Counter
                    value={combatMember.health}
                    changeValue={(newValue) =>
                        changeAttributeValue('health', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.stamina}
                    changeValue={(newValue) =>
                        changeAttributeValue('stamina', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.morale}
                    changeValue={(newValue) =>
                        changeAttributeValue('morale', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.dramaPoints}
                    changeValue={(newValue) =>
                        changeAttributeValue('dramaPoints', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.statusEffects}
                    changeValue={(newValue) =>
                        changeAttributeValue('statusEffects', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.advantages}
                    changeValue={(newValue) =>
                        changeAttributeValue('advantages', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.armorPoints}
                    changeValue={(newValue) =>
                        changeAttributeValue('armorPoints', newValue)
                    }
                />
            </td>
            <td>
                <Counter
                    value={combatMember.ammunition}
                    changeValue={(newValue) =>
                        changeAttributeValue('ammunition', newValue)
                    }
                />
            </td>
            <td>
                <div className='flex justify-center'>
                    <IconButton
                        color='error'
                        onClick={remove}>
                        <DisabledByDefaultIcon fontSize='large' />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}
