import { useEffect, useState } from 'react';
import MoviesList from './components/MovieList';
import SearchBox from './components/SearchBox';
import './Home.css';
import MovieDetailsModal from './components/MovieDetailsModal';

export default function Home() {
    const [movies, setMovies] = useState([]);  
    const [searchValue, setSearchValue] = useState('');  
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // const allMovies='http://www.omdbapi.com/?i=tt3896198&apikey=938869ce'
    const allMovies = [
        {
            "Title": "Star Wars: Episode IV - A New Hope",
            "Year": "1977",
            "imdbID": "tt0076759",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode V - The Empire Strikes Back",
            "Year": "1980",
            "imdbID": "tt0080684",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VI - Return of the Jedi",
            "Year": "1983",
            "imdbID": "tt0086190",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VII - The Force Awakens",
            "Year": "2015",
            "imdbID": "tt2488496",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode I - The Phantom Menace",
            "Year": "1999",
            "imdbID": "tt0120915",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode III - Revenge of the Sith",
            "Year": "2005",
            "imdbID": "tt0121766",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode II - Attack of the Clones",
            "Year": "2002",
            "imdbID": "tt0121765",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Rogue One: A Star Wars Story",
            "Year": "2016",
            "imdbID": "tt3748528",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode VIII - The Last Jedi",
            "Year": "2017",
            "imdbID": "tt2527336",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
        },
        {
            "Title": "Star Wars: Episode IX - The Rise of Skywalker",
            "Year": "2019",
            "imdbID": "tt2527338",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODg5ZTNmMTUtYThlNy00NjljLWE0MGUtYmQ1NDg4NWU5MjQ1XkEyXkFqcGc@._V1_SX300.jpg"
        }
    ];

    const fetchMovies = async () => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=938869ce`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Search) {
            const detailedMovies = await Promise.all(
                data.Search.map(async (movie) => {
                    const detailResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=938869ce`);
                    return await detailResponse.json();
                })
            );
            setMovies(detailedMovies);
        } else {
            setMovies([]);
        }
    };

    useEffect(() => {
        if (searchValue) {
            fetchMovies();  
        } else {
            setMovies(allMovies);  
        }
    }, [searchValue]);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedMovie(null);
    };

    

    return (
        <div className='container-fluid movie-app'>
        <div className='navbar' style={{ padding: "5px", marginLeft: '35%', marginTop: '-40px' }}>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className='movie-list container'>
            <MoviesList movies={movies} onMovieClick={handleMovieClick}/>
        </div>
        <MovieDetailsModal 
            show={showModal} 
            movie={selectedMovie} 
            handleClose={handleCloseModal} 
        />
    </div>
    );
}
