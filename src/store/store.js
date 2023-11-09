import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todoSlice';
import combatMemberReducer from './combatMemberSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        combatMembers: combatMemberReducer,
    },
});

export default store;
