import './App.scss';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import FeaturedMovies from './pages/FeaturedMovies';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
