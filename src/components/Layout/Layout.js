import { Outlet } from 'react-router-dom';
import './Layout.scss';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
    return (
        <div className='App'>
            <NavBar />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout