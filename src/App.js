import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import FeaturedMovies from './pages/FeaturedMovies';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <FeaturedMovies />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
