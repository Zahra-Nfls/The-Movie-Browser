import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import star from  './../assets/images/star.png';
import play from  './../assets/images/play.png';




const API_KEY = "3454649c439cac2c64b68732c5bd6ee2";
const API_URL = "https://api.themoviedb.org/3";


export default function Movie() {
    const { id } = useParams();  // Get the movie ID from the URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`${API_URL}/movie/${id}`, {
                    params: {
                        api_key: API_KEY,
                        language: 'en-US',
                    },
                });
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    const youtubeTrailerUrl = `https://www.youtube.com/results?search_query=${movie.title}+trailer`;

    return(
        <>
        <Header/>
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="px-8 py-8">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-md shadow-lg w-64 md:w-96 mb-6 md:mb-0"
                    />
                    <div className="md:ml-8">
                        <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
                        <p className="mb-2 font-bold "><strong>Duration:</strong> {movie.runtime} minutes</p>
                        <p className="mb-2 font-bold "><strong>Rating:</strong> {movie.vote_average.toFixed(1)} <img src={star} alt="star" className="inline w-4 h-4" /></p>
                        <p className="mb-2 font-bold "><strong>Release Date:</strong> {movie.release_date}</p>
                        <p className="mb-2 font-bold "><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                        <p className="mt-4 font-bold "><strong>Synopsis:</strong> {movie.overview}</p>
                        <a
                            href={youtubeTrailerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition duration-300"
                        >
                            <img src={play} alt="Play Trailer" className="inline w-6 h-6 mr-2" />
                            Watch Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        
        </>
    )
}