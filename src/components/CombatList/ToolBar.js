import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    combatMemberSelectors,
    addMember,
    removeAllMembers,
    resetActiveMemberIndex,
    changeActiveMember,
} from '../../store/combatMemberSlice';
import { createCombatMember } from '../../domain/CombatMember';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function ToolBar() {
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
            <button
                className='bg-blue-500 border-black rounded'
                onClick={() => dispatch(changeActiveMember('previous'))}>
                <SkipPreviousIcon />
            </button>
            <button
                className='bg-red-500 rounded'
                onClick={() => {
                    dispatch(removeAllMembers());
                    dispatch(resetActiveMemberIndex());
                }}>
                <RestartAltIcon />
            </button>
            <button
                className='bg-green-500 rounded'
                onClick={addCombatMember}>
                <PersonAddAlt1Icon />
            </button>
            <button
                className='bg-blue-500 rounded'
                onClick={() => dispatch(changeActiveMember('next'))}>
                <SkipNextIcon />
            </button>
        </div>
    );
}
