import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function Layout() {
    return (
        <div className='w-screen h-screen flex flex-row'>
            <Navigation />
            <div className='w-full h-full'>
                <Outlet />
            </div>
        </div>
    );
}
