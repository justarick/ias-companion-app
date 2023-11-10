export const createCombatMember = (id) => {
    return {
        id: id,
        name: 'Name',
        health: 0,
        stamina: 0,
        morale: 0,
        dramaPoints: 0,
        armorPoints: 0,
        statusEffects: 0,
        ammunition: 0,
        advantages: 0,
        isDefeated: false,
    };
};
