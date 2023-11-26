import React from 'react';

import CombatTable from './components/CombatTable';
import Toolbar from './components/Toolbar';

export default function CombatPage() {
    return (
        <div className='w-full'>
            <Toolbar />
            <CombatTable />
        </div>
    );
}
