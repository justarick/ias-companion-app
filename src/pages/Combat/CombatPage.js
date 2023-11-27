import React from 'react';

import Toolbar from './components/Toolbar';
import CombatTable from './components/CombatTable';

export default function CombatPage() {
    return (
        <div className='w-full flex flex-col'>
            <Toolbar />
            <CombatTable />
        </div>
    );
}
