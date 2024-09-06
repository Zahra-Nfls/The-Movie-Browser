import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Slider from 'react-slick';
import star from  './../assets/images/star.png';
import play from  './../assets/images/play.png';


const API_KEY = import.meta.env.VITE_API_KEY; 
const API_URL = import.meta.env.VITE_BASE_URL;

export default function Home() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/movie/top_rated`,
                {
                    params:{
                        api_key: API_KEY,
                        language:'en-US',
                        page:1,
                    },
                }
            );
                setTopRatedMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchTopRatedMovies();
    }, []); 

    useEffect(() =>{
        const fetchTrendingMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/trending/movie/day?api_key=${API_KEY}&language=eg-EG`);
                setTrendingMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchTrendingMovies();
    })

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                },
            },
            ],
        };

    return (
        <>
            <Header/>  
    <div className="bg-gray-900 px-8 py-8">
        <h2 className="text-white text-3xl font-bold mb-4 ml-4">Top Rated Movies</h2>
        <Slider {...settings} className="mx-4">
            {topRatedMovies.map((movie) => (
            <div key={movie.id} className="p-2">
            <Link to={`/movie/${movie.id}`}>
                                <div className="relative transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        className="rounded-md shadow-lg"
                                    />
                                    <div className="flex flex-row items-center absolute top-2 left-2 bg-white bg-opacity-75 text-black text-sm font-semibold px-2 py-1 rounded mt-3">
                                        {movie.vote_average.toFixed(1)} 
                                        
                                        <img className="ml-2 w-4 h-4" src={star} alt="star" />
                                    </div>
                                </div>
                            </Link> 
            </div>
            ))}
        </Slider>
        </div>

    <div className='bg-gray-900 px-8 py-8'>
<h1 className="text-white text-3xl font-bold mb-4 ml-4">Trending Movies</h1>
<div className="overflow-x-scroll whitespace-nowrap space-x-4 scrollbar-hide mb-10">
    {trendingMovies.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="inline-block bg-gray-800 rounded-lg overflow-hidden relative w-64 mb-5 transform hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col">
                    <section>
                        <h2 className='text-white font-bold text-center mb-2'>
                            {movie.title}
                        </h2>
                    </section>
                    <section>
                        
                        <img src={play} className="w-10" alt="play" />
                    </section>
                </div>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.id}
                />
                <div className="flex flex-row items-center absolute top-2 left-2 bg-white bg-opacity-75 text-black text-sm font-semibold px-2 py-1 rounded mt-3">
                                        {movie.vote_average.toFixed(1)} 
                                        <img className="ml-2 w-4 h-4" src={star} alt="star" />
                                    </div>
            </div>
        </Link>
    ))}
</div>
</div>
    
        </>
    );
}

