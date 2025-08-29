import { useState } from "react";
import "./App.css";




const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
  
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Main/>
    </div>
  );
}

export default App;

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <Numresults />
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="logo-img">🍿</span>
      <span className="title">usePopcorn</span>
    </div>
  );
}

function Search() {
  const [query , setQuery] = useState("")
  return (
    <input 
    value={query}
    onChange={(e)=>setQuery(e.target.value)} 
    className="search"
     type="text" 
    placeholder="serach movies ..."  />
  );
}

function Numresults() {
  return (
    <p className="num-results">
      Found <strong>X</strong> results
    </p>
  );
}


function Main (){
  return (
    <div className="main-container">
      <Listbox/>
      <Watchedbox/>
    </div>
  )
}


function Listbox (){
  const [isOpen1 , setIsOpen1] = useState(true) ; 
return (
  <div className="box">
    <button
    onClick={()=> setIsOpen1((cur)=> !cur)} 
     className="btn-toggle"> 
     {isOpen1 ? "-" : "+"} 
     </button>
  {isOpen1 &&  <MovieList/> } 
  </div>
)
}

function MovieList () {
  const [movies , setMovies] = useState (tempMovieData)
  return (
  <div className="movie-list-container">
   {
    movies.map((ele)=> <Movie movie={ele} key={ele.imdbID}/> )
   }
  </div>
  )

}

function Movie ({movie}) {
  return (
      <div className="movie-card">
      <img src={movie.Poster} alt={`${movie.Title} poster` }/>
  <div className="movie-card-info">
        <h3>{movie.Title}</h3>
        <p>
          <span style={{marginRight:"5px"}}>📅</span>
          <span>{movie.Year}</span>
        </p>
  </div>
      </div>
  )
}




















function Watchedbox () {
return (
  <div className="box">
    <button className="btn-toggle">+</button>
  </div>
)
}