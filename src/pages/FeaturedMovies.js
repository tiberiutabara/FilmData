import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// Styles
import './FeaturedMovies.css';

// API
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73544c212e932a94aae0b54bccf03afc&page=1";
export const IMG = "https://image.tmdb.org/t/p/w1280";

export default function FeaturedMovies() {
    const { data, isPending, error } = useFetch(API);

    return (
        <div className='featured-movies'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && data.results.map(movie =>(
                <div key={movie.id} className='featured-movie'>
                    <img src={IMG + movie.poster_path} alt={movie.title}/>
                    <h3>{movie.title}</h3>
                    <p>Rating: {movie.vote_average}</p>
                    <Link to={`/movies/${movie.id}`}  className='link-btn'>See Info</Link>
                </div>
            ))}
        </div>
    )
}

