import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

// Styles
import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/" className='brand'>
                <h1>FilmData</h1>
            </Link>

            <Searchbar />
        </div>
    )
}
