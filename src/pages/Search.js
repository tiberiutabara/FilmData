import { useLocation } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { useFetch } from '../hooks/useFetch';

// Styles
import './Search.scss';

export default function Search() {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const url = 'https://api.themoviedb.org/3/search/movie?&api_key=73544c212e932a94aae0b54bccf03afc&query=' + query;
    const { error, isPending, data} = useFetch(url);

    return (
        <div>
            <h2 className='page-title'>Movies titled <span>{query}</span></h2>
            {error && <p className='loading'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <MovieList movies={data.results} />}
        </div>
    )
}
