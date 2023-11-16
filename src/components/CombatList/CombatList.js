import React from 'react';
import CombatToolbar from './CombatToolbar';
import CombatTable from './CombatTable';

export default function CombatList() {
    return (
        <div className='w-full m-4'>
            <CombatToolbar />
            <CombatTable />
        </div>
    );
}
