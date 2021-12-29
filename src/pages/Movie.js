import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { IMG } from './FeaturedMovies';

// Styles
import './Movie.css';

export default function Movie() {
    const { id } = useParams();
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=73544c212e932a94aae0b54bccf03afc';
    const { data: movie, error, isPending} = useFetch(url);

    return (
        <div className="movie">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {movie && (
                <>
                    <img src={IMG + movie.poster_path} alt={movie.title}/>
                    <h2 className='page-title'>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </>
            )}
        </div>
    )
}
