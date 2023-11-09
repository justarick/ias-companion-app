import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const combatMemberAdapter = createEntityAdapter();

const initialState = {
    ...combatMemberAdapter.getInitialState(),
    activeMemberIndex: 0,
};

export const combatMemberSelectors = {
    ...combatMemberAdapter.getSelectors((state) => state.combatMembers),
    selectActiveMemberIndex: (state) => state.combatMembers.activeMemberIndex,
    selectActiveMemberId: (state) => {
        const ids = state.combatMembers.ids;
        const activeMemberIndex = state.combatMembers.activeMemberIndex;
        return ids[activeMemberIndex];
    },
};

const combatMemberSlice = createSlice({
    name: 'combatMembers',
    initialState: initialState,
    reducers: {
        addMember: combatMemberAdapter.addOne,
        updateMember: combatMemberAdapter.updateOne,
        removeMember: combatMemberAdapter.removeOne,
        removeAllMembers: combatMemberAdapter.removeAll,
        nextMember: (state) => {
            if (state.ids.length !== 0) {
                state.activeMemberIndex =
                    (state.activeMemberIndex + 1) % state.ids.length;
            }
        },
        previousMember: (state) => {
            if (state.ids.length !== 0) {
                if (state.activeMemberIndex === 0) {
                    state.activeMemberIndex = state.ids.length - 1;
                } else {
                    state.activeMemberIndex = state.activeMemberIndex - 1;
                }
            }
        },
        resetActiveMemberIndex: (state) => {
            state.activeMemberIndex = 0;
        },
    },
});

export const {
    addMember,
    updateMember,
    removeMember,
    removeAllMembers,
    nextMember,
    previousMember,
    resetActiveMemberIndex,
} = combatMemberSlice.actions;

export default combatMemberSlice.reducer;
