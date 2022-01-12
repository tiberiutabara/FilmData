import { Link } from 'react-router-dom';
import { IMG } from '../pages/FeaturedMovies';
import './MovieList.scss';
import noPic from '../img/noPic.jpg';


export default function MovieList({ movies }) {
    if (movies.length == 0){
        return <div className='error'><i className="fas fa-long-arrow-alt-up arrow"></i><p>No movies with this name.</p> <i className="far fa-frown smile"></i></div>
    }

    return (
        <div className='search-list'>
            {movies.map(movie => (
                <div key={movie.id} className='search-movies'>
                    <img src={movie.poster_path ? (IMG + movie.poster_path) : noPic} alt={movie.title}/>
                    {movie.poster_path ? '' : <div className='no-poster'><p>(No Poster Found)</p><p>Title: {movie.title}</p></div>}
                    <Link to={`/movies/${movie.id}`}><button>Read More</button></Link>
                </div>
            ))}
        </div>
    )
}
