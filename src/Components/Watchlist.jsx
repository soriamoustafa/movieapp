import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function Watchlist() {
  const [watchlist,setWatchlist]=useState([])
  const sessionId='4406ecf70a61cfbf2a101521af3736ccb7560b96'
  const accountId='21473048'
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=15d8c826c83c70ba6082db74ea00f2fc&session_id=${sessionId}`)
    .then(response=>response.json())
    .then(data=>setWatchlist(data.results))
    .catch(error=>console.error("Error fetching watchlist:", error))
  },[]);
  function removeMovie(movieId){
    const body = {
      media_type: "movie",
      media_id: movieId,
      watchlist: false
    };
    fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=15d8c826c83c70ba6082db74ea00f2fc&session_id=${sessionId}`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(body),
    }).then(response=>{response.ok?setWatchlist(watchlist.filter(movie=>movie.id!==movieId)):console.error('failed to remove movie')})
    .catch(error=>console.error("can't remove movie",error))
  }
  return (
    <div>
      <h2>My Watchlist</h2>
      <hr/>
      {watchlist.length>0?(
        <>
          {watchlist.map((movie)=>(
            <>
              <div key={movie.id} style={{display:"flex"}}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{ margin:"20px", borderRadius: "10px",boxShadow:"3px 3px 7px gray" }}/>
                <div className='info'>
                  <h2 style={{marginTop:"20px"}} >{movie.title}</h2>
                  <p style={{marginTop:"20px" , marginBottom:"30px"}}>Release Date: {movie.release_date}</p>
                  <Link className="btn btn-dark" to={`/movie/${movie.id}`} >View Details</Link>
                  <button className="btn btn-dark" onClick={()=>removeMovie(movie.id)}>Remove</button>
                </div>
              </div>
                <hr/>
                </>
          ))}
        </>
      ):(<p style={{textAlign:"center"}}>No movies in your watchlist</p>)}
    </div>
  );
}

export default Watchlist