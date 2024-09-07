import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { addToWatchlist } from "./addtowatclist";
import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {faHeart } from '@fortawesome/free-solid-svg-icons';




function Content() {
    const apiUrl="https://api.themoviedb.org/3/movie/";
    const [trendingMovies,setTrendingmovies]=useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [popularMovies,setPopularMovies]=useState([]);
    const [upMovies,setUpMovies]=useState([]);

    function getTrending(){
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1')
        .then((response) => response.json())
        .then((data) => setTrendingmovies(data.results))
        .catch((error) => console.error("Error fetching movies:", error)); 
    }
    function getTopRated(){
        fetch(`${apiUrl}top_rated?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1 `)
        .then((response) => response.json())
        .then((data) => setTopMovies(data.results))
        .catch((error) => console.error("Error fetching movies:", error)); 
    }
    function getPopular(){
        fetch(`${apiUrl}popular?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1 `)
        .then((response) => response.json())
        .then((data) => setPopularMovies(data.results))
        .catch((error) => console.error("Error fetching movies:", error)); 
    }
    function getUpMovies(){
        fetch(`${apiUrl}upcoming?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1 `)
        .then((response) => response.json())
        .then((data) => setUpMovies(data.results))
        .catch((error) => console.error("Error fetching movies:", error)); 
    }

    useEffect(() => {
        getTopRated()
        getPopular()
        getUpMovies()
        getTrending()
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };

    return (
        <>
        <h2 className="title" ><span>T</span>rending Movies</h2>
        <hr/>
        {trendingMovies.length > 0 ? ( 
            <Slider {...settings} >
                {trendingMovies.map((movie) => (
                    <div className="show-movies" key={movie.id} >
                        <div className="image">
                            <div className="up">
                                <Link className="btn btn-dark" to={`/movie/${movie.id}`}><FontAwesomeIcon icon={faEye} className="icon" /></Link>
                                <Link className="btn btn-dark" to={`/watchlist`}onClick={() => addToWatchlist(movie.id,"movie")}><FontAwesomeIcon className="icon" icon={faHeart} /></Link>                              
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                        </div>
                        <h5>{movie.title}</h5>
                    </div>
                ))}
            </Slider>
        ) : (
            <p>Loading movies...</p>
        )}
        <h2 className="title"><span>T</span>op Rated Movies</h2>
        <hr/>
        {topMovies.length > 0 ? ( 
            <Slider {...settings} >
                {topMovies.map((movie) => (
                    <div className="show-movies" key={movie.id}>
                        <div className="image">
                            <div className="up">
                                <Link className="btn btn-dark"  to={`/movie/${movie.id}`} ><FontAwesomeIcon icon={faEye} className="icon"/></Link>
                                <Link className="btn btn-dark"  to={`/watchlist`}onClick={() => addToWatchlist(movie.id,"movie")}><FontAwesomeIcon className="icon" icon={faHeart} /></Link>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                        </div>
                        <h5>{movie.title}</h5>
                    </div>
                ))}
            </Slider>
        ) : (
            <p>Loading movies...</p>
        )}

        <h2 className="title"><span>W</span>hat&apos;s Popular</h2>
        <hr/>
        {popularMovies.length > 0 ? ( 
            <Slider {...settings} >
                {popularMovies.map((movie) => (
                    <div className="show-movies" key={movie.id} >
                        <div className="image">
                            <div className="up">
                                <Link className="btn btn-dark"  to={`/movie/${movie.id}`}><FontAwesomeIcon icon={faEye} className="icon" /></Link>
                                <Link className="btn btn-dark"  to={`/watchlist`}onClick={() => addToWatchlist(movie.id,"movie")}><FontAwesomeIcon icon={faHeart} className="icon"/></Link>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                        </div>
                        <h5>{movie.title}</h5>

                    </div>
                ))}
            </Slider>
        ) : (
            <p>Loading movies...</p>
        )}
        <h2 className="title"><span>U</span>pcoming Movies</h2>
        <hr/>
        {upMovies.length > 0 ? ( 
            <Slider {...settings} >
                {upMovies.map((movie) => (
                    <div className="show-movies" key={movie.id} >
                        <div className="image">
                            <div className="up">
                                <Link className="btn btn-dark"  to={`/movie/${movie.id}`}><FontAwesomeIcon icon={faEye} className="icon"/></Link>
                                <Link className="btn btn-dark"  to={`/watchlist`}onClick={() => addToWatchlist(movie.id,"movie")}><FontAwesomeIcon icon={faHeart} className="icon" /></Link>                             
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                        </div>
                        <h5>{movie.title}</h5>
                    </div>
                ))}
            </Slider>
        ) : (
            <p>Loading movies...</p>
        )}
        </>
    );
}

export default Content;



























