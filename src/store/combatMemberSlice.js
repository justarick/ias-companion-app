import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const combatMemberAdapter = createEntityAdapter();

const initialState = combatMemberAdapter.getInitialState({
    activeMemberIndex: 0,
});

const combatMemberSlice = createSlice({
    name: 'combatMemberSlice',
    initialState: initialState,
    reducers: {
        addMember: combatMemberAdapter.addOne,
        updateMember: combatMemberAdapter.updateOne,
        removeMember: combatMemberAdapter.removeOne,
        removeAllMembers: combatMemberAdapter.removeAll,
        resetActiveMemberIndex: (state) => {
            state.activeMemberIndex = 0;
        },
        changeActiveMemberIndex: (state, action) => {
            const direction = action.payload;
            const currentIndex = state.activeMemberIndex;
            const maxIndex = state.ids.length - 1;

            if (direction === 'next') {
                if (currentIndex === maxIndex) {
                    state.activeMemberIndex = 0;
                } else {
                    state.activeMemberIndex = currentIndex + 1;
                }
            }

            if (direction === 'previous') {
                if (currentIndex === 0) {
                    state.activeMemberIndex = maxIndex;
                } else {
                    state.activeMemberIndex = currentIndex - 1;
                }
            }
        },
        swapMemberIds: (state, action) => {
            const direction = action.payload.direction;
            const currentIndex = state.ids.indexOf(action.payload.id);
            let otherIndex;
            let newIdArray = state.ids;

            if (direction === 'up') {
                if (currentIndex === 0) {
                    return;
                } else {
                    otherIndex = currentIndex - 1;
                }
            }

            if (direction === 'down') {
                if (currentIndex === state.ids.length - 1) {
                    return;
                } else {
                    otherIndex = currentIndex + 1;
                }
            }

            const temp = newIdArray[otherIndex];
            newIdArray[otherIndex] = newIdArray[currentIndex];
            newIdArray[currentIndex] = temp;

            state.ids = newIdArray;
        },
    },
});

export const combatMemberSelectors = {
    ...combatMemberAdapter.getSelectors((state) => state.combatMemberSlice),
    selectActiveMemberId: (state) => {
        const activeMemberIndex = state.combatMemberSlice.activeMemberIndex;
        const activeMemberId = state.combatMemberSlice.ids[activeMemberIndex];

        return activeMemberId;
    },
};

export const {
    addMember,
    updateMember,
    removeMember,
    removeAllMembers,
    resetActiveMemberIndex,
    changeActiveMemberIndex,
    swapMemberIds,
} = combatMemberSlice.actions;

export default combatMemberSlice.reducer;
