import './MovieList.css';
import Movie from './components/movie.js'

const movies = [
  {movieTitle: 'Batman'},
  {movieTitle: 'Star Wars'},
  {movieTitle: 'Pulp Fiction'},
];

const movieComponents = movies.map((movie, key) => 
<Movie key={key} movieTitle={movie.movieTitle}/>);


function MovieList() {
  return (
    <div className="App">
      {movieComponents}
    </div>
  );
}

export default MovieList;
