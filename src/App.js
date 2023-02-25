import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import ReviewForm from './components/ReviewForm';
import movies from './components/MoviesArrayList';

function App() {
  return (
    <div>
         <MovieList movies={movies}/>
    </div>
  );
}

export default App;
