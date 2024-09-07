import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { addToWatchlist } from "./addtowatclist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {faHeart } from '@fortawesome/free-solid-svg-icons';

function TvContent() {
    const [tvs,setTvs]=useState([])
    const [trendingTv,setTrendingTv]=useState([])
    const [popularTv,setPopularTv]=useState([]);
    function getTrendingTv(){
        fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1')
        .then(response=>response.json())
        .then(data=>setTrendingTv(data.results))
        .catch((error)=>console.error(error))
    }
    function getTopRatedTvseries(){
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1')
        .then(response=>response.json())
        .then(data=>setTvs(data.results))
        .catch((error)=>console.error(error))
    }
    function getPopular(){
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=1')
        .then((response) => response.json())
        .then((data) => setPopularTv(data.results))
        .catch((error) => console.error("Error fetching movies:", error)); 
    }
    useEffect(()=>{
        getTopRatedTvseries()
        getTrendingTv()
        getPopular()
    },[])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
    };
    return (
        <div>
            <div className="tv-show">
                <h2 style={{marginTop:"30px"}}><span>T</span>rending Tv Serires</h2>
                <Link className="btn btn-dark" to="/tvWatchlist">My Watchlist</Link>
            </div>
            <hr/>
            {trendingTv.length > 0 ? ( 
                <Slider {...settings} >
                {trendingTv.map((tv) => (
                    <div className="show-movies" key={tv.id} >
                        <div className="image">
                            <div className="up">
                                <Link className="btn btn-dark"  to={`/tv/${tv.id}`}><FontAwesomeIcon icon={faEye} className="icon" /></Link>
                                <Link className="btn btn-dark"  to={`/tvWatchlist`}onClick={() => addToWatchlist(tv.id,"tv")}><FontAwesomeIcon className="icon" icon={faHeart} /></Link>
                            </div>
                            <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt={tv.title} style={{ margin:"0 auto", borderRadius: "10px" }}/>
                        </div>
                        <h5>{tv.name}</h5>
                    </div>
                ))}
                </Slider>
        ) : (
            <p>Loading movies...</p>
        )}
            <h2 style={{margin:"40px 0 40px 10px"}}><span>T</span>op Rated Tv Series</h2>
            <hr/>
            {tvs.length > 0 ? ( 
                <Slider {...settings} >
                {tvs.map((tv) => (
                    <div className="show-movies" key={tv.id} >
                    <div className="image">
                        <div className="up">
                            <Link className="btn btn-dark"  to={`/tv/${tv.id}`}><FontAwesomeIcon icon={faEye} className="icon" /></Link>
                            <Link className="btn btn-dark"  to={`/tvWatchlist`}onClick={() => addToWatchlist(tv.id,"tv")}><FontAwesomeIcon className="icon" icon={faHeart} /></Link>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt={tv.title} style={{ margin:"0 auto", borderRadius: "10px" }}/>
                    </div>
                    <h5>{tv.name}</h5>
                </div>
                ))}
                </Slider>
        ) : (
            <p>Loading movies...</p>
        )}
            <h2 style={{margin:"40px 0 40px 10px"}}><span>W</span>hat&apos;s Popular</h2>
            <hr/>
            {popularTv.length > 0 ? ( 
                <Slider {...settings} >
                {popularTv.map((tv) => (
                    <div className="show-movies" key={tv.id} >
                    <div className="image">
                        <div className="up">
                            <Link className="btn btn-dark"  to={`/tv/${tv.id}`}><FontAwesomeIcon icon={faEye} className="icon" /></Link>
                            <Link className="btn btn-dark"  to={`/tvWatchlist`}onClick={() => addToWatchlist(tv.id,"tv")}><FontAwesomeIcon className="icon" icon={faHeart} /></Link>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt={tv.title} style={{ margin:"0 auto", borderRadius: "10px" }}/>
                    </div>
                    <h5>{tv.name}</h5>
                </div>
                ))}
                </Slider>
        ) : (
            <p>Loading movies...</p>
        )}
        </div>
    )
}

export default TvContent