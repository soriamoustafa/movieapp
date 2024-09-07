import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { addToWatchlist } from './addtowatclist'
function MovieDetails() {
    const params=useParams()
    const [movie,setMovie]=useState({})
    const [cast, setCast]=useState([]);
    function getMovieDetailes(){
        fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=15d8c826c83c70ba6082db74ea00f2fc`)
        .then((response)=>response.json())
        .then((movie)=>setMovie(movie))
    }
    function getCast(){
        fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}/credits?api_key=15d8c826c83c70ba6082db74ea00f2fc`)
        .then((response)=>response.json())
        .then((data)=>setCast(data.cast))
    }
    useEffect(()=>{
        getMovieDetailes();
        getCast()
    },[params.movie_id])

    return (
        <>
        <div className="backdrop">
            <div className="details-drop"></div>
            <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt="..." style={{width:"100%", height:"70vh"}}/>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="..." />
                <div className="info">
                    <h1>{movie.title}</h1>
                    <p>Release Date: {movie.release_date}</p>
                    <span style={{marginRight:"30px", color:"white"}}> Rating: {movie.vote_average}</span>
                    <span style={{color:"white"}}>Language: {movie.original_language}</span>
                    <p style={{marginTop:"30px"}}>{movie.overview}</p>  
                    <Link className="btn btn-dark" to={`/watchlist`}onClick={() => addToWatchlist(movie.id,"movie")}>Add to watchlist</Link>
                    <Link className="btn btn-dark" to={`/movie/${movie.id}/trailer`}>Watch Trailer</Link>
                </div>
            </div>
        </div>
        <h1 style={{margin:"90px 50px 20px"}}><span>C</span>ast</h1>
        <hr/>
        <div className="cast-info">
                {cast.slice(0,10).map((c)=>{
                    return(
                        <div key={c.cast_id} style={{margin:"0 50px"}}>
                            <img  src={`https://image.tmdb.org/t/p/w200${c.profile_path}`} alt={c.name} />
                            <h3>{c.name}</h3>
                            <p>Character: {c.character}</p>
                        </div>

                    )
                })}

        </div>
        </>
    )
}

export default MovieDetails