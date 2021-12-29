import { Link } from 'react-router-dom';
import { IMG } from '../pages/FeaturedMovies';

export default function MovieList({ movies }) {
    if (movies.length == 0){
        return <div className='error'>No movies found...</div>
    }

    return (
        <div className='movies-list'>
            {movies.map(movie => (
                <div key={movie.id}>
                    <img src={IMG + movie.poster_path} alt={movie.title}/>
                    <h3>{movie.title}</h3>
                    <Link to={`/movies/${movie.id}`}>See Info</Link>
                </div>
            ))}
        </div>
    )
}
