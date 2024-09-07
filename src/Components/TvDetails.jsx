import { useEffect, useState } from "react"
import {  Link, useParams } from "react-router-dom" 
import { addToWatchlist } from "./addtowatclist"
function TvDetails() {
    const params=useParams()
    const [tv,setTv]=useState({})
    const [cast, setCast]=useState([]);
    function getTvDetailes(){
        fetch(`https://api.themoviedb.org/3/tv/${params.series_id}?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US`)
        .then((response)=>response.json())
        .then((movie)=>setTv(movie))
    }
    function getCast(){
        fetch(`https://api.themoviedb.org/3/tv/${params.series_id}/credits?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US`)
        .then((response)=>response.json())
        .then((data)=>setCast(data.cast))
    }
    useEffect(()=>{
        getTvDetailes();
        getCast()
    },[params.movie_id])
    return (
        <>
        <div className="backdrop">
            <div className="details-drop"></div>
            <img src={`https://image.tmdb.org/t/p/w200${tv.backdrop_path}`} alt="..." style={{width:"100%", height:"70vh"}}/>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt="..."/>
                <div className="info">
                    <h1>{tv.name}</h1>
                    <p>Release Date: {tv.release_date}</p>
                    <span style={{marginRight:"30px", color:"white"}}>Rating: {tv.vote_average}</span>
                    <span style={{color:"white"}}>Language: {tv.original_language}</span>
                    <p style={{marginTop:"30px"}}>{tv.overview}</p>
                    <Link className="btn btn-dark" to={`/tvWatchlist`}onClick={() => addToWatchlist(tv.id,"tv")}>Add to watchlist</Link>
                </div>
            </div>
        </div>
        <h1 style={{margin:"90px 50px 20px",}}><span>C</span>ast</h1>
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

export default TvDetails