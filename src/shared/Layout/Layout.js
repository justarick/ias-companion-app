import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function Layout() {
    return (
        <div className='h-full w-full flex flex-row'>
            <Navigation />
            <Outlet />
        </div>
    );
}
