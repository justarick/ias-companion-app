import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
    return (
        <div className='flex flex-row'>
            <Navigation />
            <Outlet />
        </div>
    );
}
