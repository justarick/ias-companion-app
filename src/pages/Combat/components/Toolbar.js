import React from 'react';
import { useDispatch } from 'react-redux';
import {
    addMember,
    removeAllMembers,
    shuffleIds,
    switchActiveCombatMemberId,
    resetActiveCombatMemberId,
} from '../../../store/combatMemberSlice';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { IconButton, Stack } from '@mui/material';

import { blue, red, green, yellow } from '@mui/material/colors';
import ToolbarButton from '../../../shared/components/ToolbarButton';

export default function Toolbar() {
    const dispatch = useDispatch();

    const addCombatMember = () => {
        dispatch(addMember());
    };

    const resetCombatList = () => {
        dispatch(removeAllMembers());
        dispatch(resetActiveCombatMemberId());
    };

    const shuffleMembers = () => {
        dispatch(shuffleIds());
    };

    const changeActiveMember = (direction) => {
        dispatch(switchActiveCombatMemberId(direction));
    };

    return (
        <Stack
            className='flex justify-evenly bg-black'
            direction='row'>
            <ToolbarButton
                color={blue[600]}
                icon={<SkipPreviousIcon fontSize='large' />}
                onClick={() => changeActiveMember('previous')}
            />
            <ToolbarButton
                color={red[600]}
                icon={<RestartAltIcon fontSize='large' />}
                onClick={resetCombatList}
            />
            <ToolbarButton
                color={green[600]}
                icon={<PersonAddAlt1Icon fontSize='large' />}
                onClick={addCombatMember}
            />
            <ToolbarButton
                color={yellow[600]}
                icon={<ShuffleIcon fontSize='large' />}
                onClick={shuffleMembers}
            />
            <ToolbarButton
                color={blue[600]}
                icon={<SkipNextIcon fontSize='large' />}
                onClick={() => changeActiveMember('next')}
            />
        </Stack>
    );
}
