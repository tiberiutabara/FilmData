import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { IMG } from './FeaturedMovies';

// Styles
import './Movie.scss';

export default function Movie() {
    const { id } = useParams();
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=73544c212e932a94aae0b54bccf03afc';
    const { data: movie, error, isPending} = useFetch(url);

    return (
        <div className='movie-margin'>
            {error && <p className='loading'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            
            {movie && (

                <div className='movie'>

                    <h1 className='page-title'>{movie.title}</h1>

                    <div className='movie-details'>

                        <p>{movie.overview}</p>

                        <div className='genres'>
                            <p>{!movie.genres[0] && 'No data'}</p>
                            {movie.genres.map(({ name, id }) => (
                                <ul key={id}>
                                    {name && <li>{name}</li>}
                                </ul>
                            ))}
                        </div>

                        <div className='extras'>
                            <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>

                            <p>Movie length: {movie.runtime} minutes</p>

                            <p>Language: {movie.spoken_languages[0] ? movie.spoken_languages[0].english_name : 'No data on language'}</p>

                            <p>Budget: {movie.budget ? movie.budget : ' Unknown'}</p>

                            <p>Revenue: {movie.revenue ? movie.revenue : ' Unknown'}</p>

                            <p>Release Date: {movie.release_date ? movie.release_date : ' Unknown'}</p>
                        </div>

                        <div className='companies'>
                        <p>{!movie.production_companies[0] && 'No data on companies'}</p>
                        {movie.production_companies.map(({ name, logo_path }) => (
                            <div key={name}>
                                {logo_path && <img src={IMG + logo_path} alt='production company logo' />}
                            </div>
                        ))}
                        </div>

                    </div>

                    {movie.poster_path && <img className='poster' src={IMG + movie.poster_path} alt={movie.title}/>}

                </div>
            )}

        </div>
    )
}
