import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    buildPoolManually: false,
    challengeRating: 0,
    attribute: 0,
    skill: 0,
    bonus: 0,
    advantageCount: 0,
    statusEffectCount: 0,
    pool: 0,
    diceCount: 0,
    restPool: 0,
    diceResult: 0,
    sacrificeValue: 0,
    result: 0,
    challengeResult: 'Ja, aber...',
};

export const challengeCalculatorSlice = createSlice({
    name: 'challengeCalculatorSlice',
    initialState: initialState,
    reducers: {
        resetChallengeCalculator: () => initialState,
        updateBuildPoolManually: (state) => {
            state.buildPoolManually = !state.buildPoolManually;
        },
        updateChallengeRating: (state, action) => {
            if (action.payload !== null) {
                state.challengeRating = action.payload;
            }
        },
        updateAttribute: (state, action) => {
            if (action.payload !== null) {
                state.attribute = action.payload;
            }
        },
        updateSkill: (state, action) => {
            if (action.payload !== null) {
                state.skill = action.payload;
            }
        },
        updateBonus: (state, action) => {
            if (action.payload !== null) {
                state.bonus = action.payload;
            }
        },
        updateAdvantageCount: (state, action) => {
            if (action.payload !== null) {
                state.advantageCount = action.payload;
            }
        },
        updateStatusEffectCount: (state, action) => {
            if (action.payload !== null) {
                state.statusEffectCount = action.payload;
            }
        },
        updatePool: (state, action) => {
            if (action.payload !== null) {
                state.pool = action.payload;
            }
        },
        calculatePool: (state) => {
            let newPool = 0;

            newPool += state.attribute;
            newPool += state.skill;
            newPool += state.bonus;
            newPool += 2 * state.advantageCount;
            newPool -= state.statusEffectCount;

            state.pool = newPool;
        },
        updateDiceCount: (state, action) => {
            if (action.payload !== null) {
                state.diceCount = action.payload;
            }
        },
        calculateRestPool: (state) => {
            let newRestPool = state.pool;

            newRestPool -= 5 * state.diceCount;

            state.restPool = newRestPool;
        },
        updateDiceResult: (state, action) => {
            if (action.payload !== null) {
                state.diceResult = action.payload;
            }
        },
        updateSacrificeValue: (state, action) => {
            if (action.payload !== null) {
                state.sacrificeValue = action.payload;
            }
        },
        calculateResult: (state) => {
            let newResult = state.restPool;

            newResult += state.diceResult;
            newResult -= state.challengeRating;
            newResult += state.sacrificeValue;

            state.result = newResult;
        },
        updateChallengeResult: (state) => {
            let newChallengeResult = '';

            if (state.result >= 20) {
                newChallengeResult = 'Ja, und...';
            } else if (state.result >= 10 && state.result < 20) {
                newChallengeResult = 'Ja';
            } else if (state.result >= 0 && state.result < 10) {
                newChallengeResult = 'Ja, aber...';
            } else if (state.result >= -5 && state.result < 0) {
                newChallengeResult = 'Nein, aber...';
            } else if (state.result >= -10 && state.result < -5) {
                newChallengeResult = 'Nein';
            } else if (state.result >= -15 && state.result < -10) {
                newChallengeResult = 'Nein, und...';
            } else if (state.result < -15) {
                newChallengeResult =
                    'Nicht erlaubt! Bringe Opfer, bis du mindestens -15 erreichst.';
            }

            state.challengeResult = newChallengeResult;
        },
    },
});

export const challengeCalculatorSelectors = {
    slice: (state) => state.challengeCalculatorSlice,
    selectPool: (state) => state.challengeCalculatorSlice.pool,
    selectInterimResult: (state) =>
        state.challengeCalculatorSlice.interimResult,
    selectResult: (state) => state.challengeCalculatorSlice.result,
};

export const {
    resetChallengeCalculator,
    updateBuildPoolManually,
    updateChallengeRating,
    updateAttribute,
    updateSkill,
    updateBonus,
    updateAdvantageCount,
    updateStatusEffectCount,
    updatePool,
    calculatePool,
    updateDiceCount,
    calculateRestPool,
    updateDiceResult,
    calculateInterimResult,
    updateSacrificeValue,
    calculateResult,
    updateChallengeResult,
} = challengeCalculatorSlice.actions;

export default challengeCalculatorSlice.reducer;
