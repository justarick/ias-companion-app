import CombatTable from './CombatTable';
import ToolBar from './ToolBar';

export default function CombatList() {
    return (
        <div className='w-3/5 m-4'>
            <h3>Combat List</h3>
            <ToolBar />
            <CombatTable />
        </div>
    );
}
