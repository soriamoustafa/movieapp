import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Trailer() {
    const params=useParams()
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}/videos?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US`)
        .then(response=>response.json())
        .then(data=>{
            const trailer=data.results.find(
                (video)=>video.type === "Trailer" && video.site === "YouTube"
            )
            if (trailer) {
                setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
            } else {
                console.error("No trailer found");
            }
        })
        .catch(error=>console.error(error))
    },[params.movie_id])
    return (
        <div className="trailer">
            {trailerUrl?(
                <iframe
                    width="60%"
                    height="500"
                    src={trailerUrl}
                    title="Movie Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            ></iframe>
            ) : (
                <p>No trailer available</p>
            )}

        </div>
            
    )
}


export default Trailer
//https://api.themoviedb.org/3/movie/${params.movie_id}/videos?api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US