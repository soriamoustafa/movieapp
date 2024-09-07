import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function TvWatchlist() {
    const [watchlist,setWatchlist]=useState([])
    const sessionId='4406ecf70a61cfbf2a101521af3736ccb7560b96'
    const accountId='21473048'
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist/tv?api_key=15d8c826c83c70ba6082db74ea00f2fc&session_id=${sessionId}`)
        .then(response=>response.json())
        .then(data=>setWatchlist(data.results))
        .catch(error=>console.error("Error fetching watchlist:", error))
    },[]);
    function removeSeries(tvId){
        const body = {
            media_type: "tv",
            media_id: tvId,
            watchlist: false
        };
        fetch(`https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=15d8c826c83c70ba6082db74ea00f2fc&session_id=${sessionId}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(body),
        }).then(response=>{response.ok?setWatchlist(watchlist.filter(tv=>tv.id!==tvId)):console.error('failed to remove movie')})
        .catch(error=>console.error("can't remove movie",error))
    }
    return (
        <div>
            <h2>My Watchlist</h2>
            <hr/>
            {watchlist.length>0?(
                <>
            {watchlist.map((tv)=>(
                <>
                <div key={tv.id} style={{display:"flex"}}>
                    <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`} alt={tv.title} style={{ margin:"20px", borderRadius: "10px",boxShadow:"3px 3px 7px gray" }}/>
                    <div className='info'>
                    <h2 style={{marginTop:"20px"}} >{tv.name}</h2>
                    <p style={{marginTop:"20px" , marginBottom:"30px"}}>Release Date: {tv.release_date}</p>
                    <Link className="btn btn-dark"  to={`/tv/${tv.id}`} >View Details</Link>
                    <button className="btn btn-dark"  onClick={()=>removeSeries(tv.id)}>Remove</button>
                    </div>
                </div>
                <hr/>
                </>
            ))}
            </>
        ):(<p style={{textAlign:"center"}}>No movies in your watchlist</p>)}
            </div>
    )
}

export default TvWatchlist