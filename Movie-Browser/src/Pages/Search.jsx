import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import star from  './../assets/images/star.png';
import search from  './../assets/images/loupe.png';


const API_KEY = import.meta.env.VITE_API_KEY; 
const API_URL = import.meta.env.VITE_BASE_URL;



export default function Search(){
    const [searchQuery, setSearchQuery] = useState('');
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movies, setMovies] = useState([]);
    const location = useLocation();



    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`${API_URL}/genre/movie/list`, {
                    params: {
                        api_key: API_KEY,
                        language: 'en-US',
                    },
                });
                setGenres(response.data.genres);
                
                // If the current path is "/search", default to Horror genre
                if (location.pathname === '/search') {
                    const horrorGenre = response.data.genres.find(genre => genre.name === 'Horror');
                    if (horrorGenre) {
                        setSelectedGenre(horrorGenre.id);
                        fetchMoviesByGenre(horrorGenre.id);
                    }
                }
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };
        fetchGenres();
    }, [location.pathname]);

    
    const fetchMoviesByGenre = async (genreId) => {
        try {
            const response = await axios.get(`${API_URL}/discover/movie`, {
                params: {
                    api_key: API_KEY,
                    with_genres: genreId,
                    language: 'en-US',
                    page: 1,
                },
            });
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };


    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') return;

        try {
            const response = await axios.get(`${API_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query: searchQuery,
                    language: 'en-US',
                    page: 1,
                },
            });
            setMovies(response.data.results);
            setSelectedGenre(null);  
        } catch (error) {
            console.error('Error searching for movies:', error);
        }
    };
    return (
        <>
        <Header/>
        <div className="bg-gray-900 min-h-screen text-white">

                <div className="px-8">
                    <form onSubmit={handleSearch} className="mb-10 flex flex-row justify-center items-center ">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for movies..."
                            className=" flex justify-center items-center w-50 h-9 p-2 rounded-l-lg bg-grey text-black bg-opacity-75 "
                        />
                        <button type="submit" className="p-2 bg-sky-400 rounded-r-lg  hover:bg-blue-700 transition duration-300"><img className="w-5" src={search} alt="searchBtn" /></button>
                    </form>

                    <nav className="mb-10 px-8 ">
                        <ul className="flex space-x-3 overflow-x-scroll scrollbar-hide">
                            {genres.map((genre) => (
                                <li key={genre.id}>
                                    <button
                                        onClick={() => {
                                            setSelectedGenre(genre.id);
                                            fetchMoviesByGenre(genre.id);
                                        }}
                                        className={`p-2 rounded ${selectedGenre === genre.id ? 'bg-sky-400' : 'bg-white'} bg-gray-800 w-40 h-8 bg-opacity-75 text-black p-2 rounded cursor-pointer hover:bg-sky-400 transition-colors duration-300 font-playfair flex justify-center items-center mb-5`}
                                    >
                                        {genre.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {movies.map((movie) => (
                            <Link to={`/movie/${movie.id}`} key={movie.id} className="relative">
                                <div className="transform hover:scale-110 transition-transform duration-300 w-50 mx-8 mb-2">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="rounded-md shadow-lg w-30"
                                />
                                </div>
                                <div className=" flex flex-row mb-3 absolute bottom-2 left-10 bg-white bg-opacity-75 text-black text-sm font-semibold px-2 py-1 rounded">
                                    {movie.vote_average.toFixed(1)}
                                    <img className="ml-2 w-4 h-4" src={star} alt="star" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}