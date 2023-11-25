import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {
    updateMember,
    removeMember,
    switchCombatMemberIdIndices,
    switchActiveCombatMemberId,
} from '../../../store/combatMemberSlice';
import Counter from './Counter';
import { ButtonGroup, IconButton } from '@mui/material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '@mui/material/TextField';

export default function CombatTable(props) {
    const dispatch = useDispatch();
    const combatMember = useSelector(
        (state) => state.combatMemberSlice.entities[props.combatMemberId]
    );
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
        if (isActive) {
            dispatch(switchActiveCombatMemberId('next'));
        }
        dispatch(removeMember(combatMember.id));
    };

    return (
        <TableRow className={isActive ? 'bg-blue-300' : 'hover:bg-gray-300'}>
            <TableCell>
                <ButtonGroup orientation='vertical'>
                    <IconButton onClick={() => changeInitiative('up')}>
                        <ArrowDropUpIcon />
                    </IconButton>
                    <IconButton onClick={() => changeInitiative('down')}>
                        <ArrowDropDownIcon />
                    </IconButton>
                </ButtonGroup>
            </TableCell>
            <TableCell>
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
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.health}
                    changeValue={(newValue) =>
                        changeAttributeValue('health', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.stamina}
                    changeValue={(newValue) =>
                        changeAttributeValue('stamina', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.morale}
                    changeValue={(newValue) =>
                        changeAttributeValue('morale', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.dramaPoints}
                    changeValue={(newValue) =>
                        changeAttributeValue('dramaPoints', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.statusEffects}
                    changeValue={(newValue) =>
                        changeAttributeValue('statusEffects', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.advantages}
                    changeValue={(newValue) =>
                        changeAttributeValue('advantages', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.armorPoints}
                    changeValue={(newValue) =>
                        changeAttributeValue('armorPoints', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <Counter
                    value={combatMember.ammunition}
                    changeValue={(newValue) =>
                        changeAttributeValue('ammunition', newValue)
                    }
                />
            </TableCell>
            <TableCell>
                <div className='flex justify-center'>
                    <IconButton
                        color='error'
                        onClick={remove}>
                        <DisabledByDefaultIcon fontSize='large' />
                    </IconButton>
                </div>
            </TableCell>
        </TableRow>
    );
}
