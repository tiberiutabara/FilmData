import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

// Styles
import './Navbar.scss';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/" className='brand'>
                <h1>FILM<span>DATA</span></h1>
            </Link>

            <Searchbar />
        </div>
    )
}
