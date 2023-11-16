import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    challangeRating: 0,
    attribute: 0,
    skill: 0,
    bonus: 0,
    advantage: 0,
    statusEffects: 0,
    pool: 0,
    dice: 0,
    restPool: 0,
    diceResult: 0,
    interimResult: 0,
    sacrifice: 0,
    result: 0,
};

export const challengeCalculatorSlice = createSlice({
    name: 'challengeCalculatorSlice',
    initialState: initialState,
    reducers: {
        resetChallengeCalculator: () => initialState,
        updateChallangeRating: (state, action) => {
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
        updateStatusEffects: (state, action) => {
            state.statusEffects = action.payload;
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
            newPool -= state.statusEffects;

            state.pool = newPool;
        },
        updateDice: (state, action) => {
            state.dice = action.payload;
        },
        calculateRestPool: (state) => {
            let newRestPool = state.pool;

            newRestPool -= 5 * state.dice;

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
        updateSacrifice: (state, action) => {
            state.sacrifice = action.payload;
        },
        calculateResult: (state) => {
            let newResult = state.interimResult;

            newResult += state.sacrifice;

            state.result = newResult;
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
    updateChallangeRating,
    updateAttribute,
    updateSkill,
    updateBonus,
    updateAdvantage,
    updateStatusEffects,
    updatePool,
    calculatePool,
    updateDice,
    calculateRestPool,
    updateDiceResult,
    calculateInterimResult,
    updateSacrifice,
    calculateResult,
} = challengeCalculatorSlice.actions;

export default challengeCalculatorSlice.reducer;
