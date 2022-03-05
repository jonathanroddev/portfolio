import { FC } from 'react';
import Navbar from '../components/Navbar';

const Header: FC = () => {
    return (
        <header className="sticky top-0 z-50">
            <Navbar />
        </header>
    )
}

export default Header;