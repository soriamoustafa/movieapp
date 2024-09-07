import { Link } from 'react-router-dom'
import './nav.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line react/prop-types
function Navbar({toggleDarkMode}) {
    const[searchValue,setSearchValue]=useState('')
    const navigate = useNavigate();
    const searchForMovie=()=>{
        if(searchValue===''){
            alert('please enter a movie name')
            return;
        }else{
            navigate(`/search?query=${searchValue}`);
            setSearchValue("");
        }
    }
    const searchForSeries=()=>{
        if(searchValue===''){
            alert('please enter a movie name')
            return;
        }else{
            navigate(`/searchtv?query=${searchValue}`);
            setSearchValue("");
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/"><span className='char'>M</span>OVIES</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tv">TV Series</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/watchlist">My Watchlist</Link>
                        </li>
                    </ul>
                    <input className='input-form' type='text' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Enter Movie/series Name'/>
                    <button className="btn search" onClick={searchForMovie}>Search movie</button>
                    <button className="btn search" onClick={searchForSeries}>Search series</button>
                    <button className="btn-icon" onClick={toggleDarkMode}><FontAwesomeIcon icon={faCircleHalfStroke} className='theme-icon'/></button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar