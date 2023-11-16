import { configureStore } from '@reduxjs/toolkit';

import combatMemberReducer from './combatMemberSlice';
import challengeCalculatorReducer from './challengeCalculatorSlice';

const store = configureStore({
    reducer: {
        combatMemberSlice: combatMemberReducer,
        challengeCalculatorSlice: challengeCalculatorReducer,
    },
});

export default store;
