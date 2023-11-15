import { configureStore } from '@reduxjs/toolkit';

import combatMemberReducer from './combatMemberSlice';

const store = configureStore({
    reducer: {
        combatMemberSlice: combatMemberReducer,
    },
});

export default store;
