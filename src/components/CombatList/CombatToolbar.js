import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    combatMemberSelectors,
    addMember,
    removeAllMembers,
    switchActiveCombatMemberId,
    resetActiveCombatMemberId,
} from '../../store/combatMemberSlice';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Fab, IconButton } from '@mui/material';

export default function CombatToolbar() {
    const dispatch = useDispatch();
    const ids = useSelector(combatMemberSelectors.selectIds);

    const addCombatMember = () => {
        dispatch(addMember());
    };

    const resetCombatList = () => {
        dispatch(removeAllMembers());
        dispatch(resetActiveCombatMemberId());
    };

    const changeActiveMember = (direction) => {
        dispatch(switchActiveCombatMemberId(direction));
    };

    return (
        <div className='flex justify-evenly'>
            <IconButton
                color='primary'
                onClick={() => changeActiveMember('previous')}>
                <SkipPreviousIcon fontSize='large' />
            </IconButton>
            <IconButton
                color='error'
                onClick={() => resetCombatList()}>
                <RestartAltIcon fontSize='large' />
            </IconButton>
            <IconButton
                color='success'
                onClick={() => addCombatMember()}>
                <PersonAddAlt1Icon fontSize='large' />
            </IconButton>
            <IconButton
                color='primary'
                onClick={() => changeActiveMember('next')}>
                <SkipNextIcon fontSize='large' />
            </IconButton>
        </div>
    );
}
