import { useState } from 'react'
import { useHistory } from 'react-router-dom';

// Styles
import './Searchbar.scss';

export default function Searchbar() {
    const [term, setTerm] = useState('');
    const [inputValue, setInputValue] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${term}`);
        setInputValue('');
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search </label>
                <input 
                    type='text'
                    id='search'
                    value={inputValue}
                    onChange={(e) => {
                        setTerm(e.target.value)
                        setInputValue(e.target.value)
                    }}
                    required
                />
            </form>
        </div>
    )
}
