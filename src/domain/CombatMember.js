export const createCombatMember = (id) => {
    return {
        id: id,
        name: 'Name',
        health: 0,
        stamina: 0,
        morale: 0,
        dramaPoints: 0,
        baseDamage: 0,
        armorValue: 0,
        armorPoints: 0,
        statusEffects: 0,
        ammunition: 0,
        advantages: 0,
        isActive: false,
        isDefeated: false,
    };
};
