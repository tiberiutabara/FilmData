import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { useFetch } from '../hooks/useFetch';

// Styles
import './FeaturedMovies.scss';

// API
const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=73544c212e932a94aae0b54bccf03afc&page=1";
export const IMG = "https://image.tmdb.org/t/p/w1280";

export default function FeaturedMovies() {
    const { data, isPending, error } = useFetch(API);

    return (
        <>
            <Banner />

            <div className='featured-movies' id='featured'>
                {isPending && <p className='loading'>Loading...</p>}
                {error && <p className='loading'>{error}</p>}
                {data && data.results.map(movie =>(
                    <div key={movie.id} className='featured-movie'>
                        <img src={IMG + movie.poster_path} alt={movie.title}/>
                        <Link to={`/movies/${movie.id}`}  className='link-btn'><button>Read More</button></Link>
                    </div>
                ))}
            </div>
        </>
    )
}

