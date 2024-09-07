import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { addToWatchlist } from './addtowatclist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import {faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
function Search() {
    const [result,setResult]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const location=useLocation();
    const query=new URLSearchParams(location.search).get('query')
    useEffect(()=>{
        if(query){
            fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=15d8c826c83c70ba6082db74ea00f2fc&language=en-US&page=${currentPage}`)
            .then(response=>response.json())
            .then(data=>{
                setResult(data.results)
                setTotalPages(data.total_pages)
            })
            .catch(err=>console.error(err))
        }
    },[query,currentPage])
    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Search results for {query}</h1>
            <div>
                {result.length > 0 ? (
                    result.map(movie => (
                        <div key={movie.id} style={{display:"flex"}}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="..." style={{
                                borderRadius:"10px",
                                boxShadow:"2px 2px 5px gray",
                                width:"300px",
                                margin:"40px 10px 30px 20px"}}/>
                            <div className="info" style={{margin:"60px 0 0 20px"}}>
                                <h1>{movie.title}</h1>
                                <p style={{marginTop:"30px" , marginBottom:"30px"}}>Release Date: {movie.release_date}</p>
                                <Link className="btn btn-dark" style={{width:"150px", margin:"40px 0 0 10px"}} to={`/movie/${movie.id}`} >View Details</Link>
                                <Link className="btn btn-dark" style={{width:"150px", margin:"40px 0 0 10px"}} to={`/watchlist`}onClick={() => addToWatchlist(movie.id,"movie")}>Add to watchlist</Link>
                            </div>
                        </div>
                    ))
                ) : (<p>No movies found.</p>)}
            </div>
            <div style={{ textAlign: "center", margin: "20px" }} className="pagination">
                <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}><FontAwesomeIcon icon={faAnglesLeft} /></button>
                <span style={{ margin: "0 10px" }}>{`Page ${currentPage} of ${totalPages}`}</span>
                <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}><FontAwesomeIcon icon={faAnglesRight} /></button>
            </div>
        </div>
    )
}

export default Search