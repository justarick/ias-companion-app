import CombatTable from './CombatTable';
import ToolBar from './ToolBar';

export default function CombatList() {
    return (
        <div className='w-full m-4'>
            <ToolBar />
            <CombatTable />
        </div>
    );
}
