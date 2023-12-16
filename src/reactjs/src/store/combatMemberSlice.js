import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { createCombatMember } from '../domain/CombatMember';

const combatMemberAdapter = createEntityAdapter();

const initialState = combatMemberAdapter.getInitialState({
    activeCombatMemberId: 1,
});

const combatMemberSlice = createSlice({
    name: 'combatMemberSlice',
    initialState: initialState,
    reducers: {
        addMember: (state) => {
            const ids = state.ids;

            let newMember;

            if (ids.length === 0) {
                newMember = createCombatMember(1);
            } else {
                const ids = state.ids;
                const id = Math.max(...ids) + 1;

                newMember = createCombatMember(id);
            }

            combatMemberAdapter.addOne(state, newMember);
        },
        updateMember: combatMemberAdapter.updateOne,
        removeMember: combatMemberAdapter.removeOne,
        removeAllMembers: combatMemberAdapter.removeAll,
        resetActiveCombatMemberId: (state) => {
            state.activeCombatMemberId = 1;
        },
        switchActiveCombatMemberId: (state, action) => {
            const direction = action.payload;
            const activeMemberId = state.activeCombatMemberId;
            const activeMemberIdIndex = state.ids.indexOf(activeMemberId);
            const maxIdIndex = state.ids.length - 1;

            let newActiveMemberId = activeMemberId;

            if (maxIdIndex === -1) {
                return;
            }

            if (direction === 'next') {
                if (activeMemberIdIndex === maxIdIndex) {
                    newActiveMemberId = state.ids[0];
                } else {
                    newActiveMemberId = state.ids[activeMemberIdIndex + 1];
                }
            }

            if (direction === 'previous') {
                if (activeMemberIdIndex === 0) {
                    newActiveMemberId = state.ids[maxIdIndex];
                } else {
                    newActiveMemberId = state.ids[activeMemberIdIndex - 1];
                }
            }

            state.activeCombatMemberId = newActiveMemberId;
        },
        shuffleIds: (state) => {
            const ids = state.ids;

            ids.sort(() => Math.random() - 0.5);

            state.ids = ids;
        },
        switchCombatMemberIdIndices: (state, action) => {
            const direction = action.payload.direction;
            const currentIndex = state.ids.indexOf(action.payload.id);
            const maxIdIndex = state.ids.length - 1;

            let targetIndex;

            if (direction === 'up') {
                if (currentIndex === 0) {
                    targetIndex = maxIdIndex;
                } else {
                    targetIndex = currentIndex - 1;
                }
            }

            if (direction === 'down') {
                if (currentIndex === maxIdIndex) {
                    targetIndex = 0;
                } else {
                    targetIndex = currentIndex + 1;
                }
            }

            let newIdArray = state.ids;

            const element = newIdArray.splice(currentIndex, 1)[0];

            newIdArray.splice(targetIndex, 0, element);

            state.ids = newIdArray;
        },
    },
});

export const combatMemberSelectors = {
    ...combatMemberAdapter.getSelectors((state) => state.combatMemberSlice),
    selectActiveCombatMemberId: (state) =>
        state.combatMemberSlice.activeCombatMemberId,
};

export const {
    addMember,
    updateMember,
    removeMember,
    removeAllMembers,
    resetActiveCombatMemberId,
    shuffleIds,
    switchActiveCombatMemberId,
    switchCombatMemberIdIndices,
} = combatMemberSlice.actions;

export default combatMemberSlice.reducer;
