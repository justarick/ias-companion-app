import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    combatMemberSelectors,
    addMember,
    removeAllMembers,
    switchActiveCombatMemberId,
    resetActiveCombatMemberId,
} from '../../store/combatMemberSlice';
import { createCombatMember } from '../../domain/CombatMember';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ToolBar() {
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
            <button
                className='bg-blue-500 border-black rounded'
                onClick={() => changeActiveMember('previous')}>
                <SkipPreviousIcon fontSize='large' />
            </button>
            <button
                className='bg-red-500 rounded'
                onClick={() => resetCombatList()}>
                <RestartAltIcon fontSize='large' />
            </button>
            <button
                className='bg-green-500 rounded'
                onClick={() => addCombatMember()}>
                <PersonAddAlt1Icon fontSize='large' />
            </button>
            <button
                className='bg-blue-500 rounded'
                onClick={() => changeActiveMember('next')}>
                <SkipNextIcon fontSize='large' />
            </button>
        </div>
    );
}
