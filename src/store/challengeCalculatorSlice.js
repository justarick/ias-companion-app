import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    simpleMode: true,
    challangeRating: 0,
    attribute: 0,
    skill: 0,
    bonus: 0,
    advantage: 0,
    statusEffectCount: 0,
    pool: 0,
    diceCount: 0,
    restPool: 0,
    diceResult: 0,
    interimResult: 0,
    sacrificeValue: 0,
    result: 0,
    challengeResult: '',
};

export const challengeCalculatorSlice = createSlice({
    name: 'challengeCalculatorSlice',
    initialState: initialState,
    reducers: {
        resetChallengeCalculator: () => initialState,
        updateSimpleMode: (state) => {
            state.simpleMode = !state.simpleMode;
        },
        updateChallengeRating: (state, action) => {
            state.challangeRating = action.payload;
        },
        updateAttribute: (state, action) => {
            state.attribute = action.payload;
        },
        updateSkill: (state, action) => {
            state.skill = action.payload;
        },
        updateBonus: (state, action) => {
            state.bonus = action.payload;
        },
        updateAdvantage: (state, action) => {
            state.advantage = action.payload;
        },
        updateStatusEffectCount: (state, action) => {
            state.statusEffectCount = action.payload;
        },
        updatePool: (state, action) => {
            state.pool = action.payload;
        },
        calculatePool: (state) => {
            let newPool = 0;

            newPool += state.attribute;
            newPool += state.skill;
            newPool += state.bonus;
            newPool += 2 * state.advantage;
            newPool -= state.statusEffectCount;

            state.pool = newPool;
        },
        updateDiceCount: (state, action) => {
            state.diceCount = action.payload;
        },
        calculateRestPool: (state) => {
            let newRestPool = state.pool;

            newRestPool -= 5 * state.diceCount;

            state.restPool = newRestPool;
        },
        updateDiceResult: (state, action) => {
            state.diceResult = action.payload;
        },
        calculateInterimResult: (state) => {
            let newInterimResult = state.restPool;

            newInterimResult += state.diceResult;
            newInterimResult -= state.challangeRating;

            state.interimResult = newInterimResult;
        },
        updateSacrificeValue: (state, action) => {
            state.sacrificeValue = action.payload;
        },
        calculateResult: (state) => {
            let newResult = state.interimResult;

            newResult += state.sacrificeValue;

            state.challengeResult = newResult;
        },
        updateChallengeResult: (state) => {
            let newChallengeResult = '';

            if (state.challengeResult >= 20) {
                newChallengeResult = 'Ja, und...';
            } else if (
                state.challengeResult >= 10 &&
                state.challengeResult < 20
            ) {
                newChallengeResult = 'Ja';
            } else if (
                state.challengeResult >= 0 &&
                state.challengeResult < 10
            ) {
                newChallengeResult = 'Ja, aber...';
            } else if (
                state.challengeResult >= -5 &&
                state.challengeResult < 0
            ) {
                newChallengeResult = 'Nein, aber...';
            } else if (
                state.challengeResult >= -10 &&
                state.challengeResult < -5
            ) {
                newChallengeResult = 'Nein';
            } else if (
                state.challengeResult >= -15 &&
                state.challengeResult < -10
            ) {
                newChallengeResult = 'Nein, und...';
            } else if (state.challengeResult < -15) {
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
    updateSimpleMode,
    updateChallengeRating,
    updateAttribute,
    updateSkill,
    updateBonus,
    updateAdvantage,
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
