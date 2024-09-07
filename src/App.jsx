import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Tv from './Components/Tv'
import Watchlist from './Components/Watchlist'
import { Routes, Route } from "react-router-dom";
import Search from './Components/Search'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MovieDetails from './Components/MovieDetails'
import TvDetails from './Components/TvDetails'
import TvWatchlist from './Components/TvWatchlist'
import SearchTv from './Components/SearchTv'
import Trailer from './Components/Trailer'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode,setDarkMode]=useState(()=>{
    const savedMode=localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  })
  useEffect(()=>{
    localStorage.setItem('darkMode',darkMode);
  },[darkMode]);

  const toggleDarkMode=()=>{
    setDarkMode(!darkMode);
    }
  return (
    <div className={darkMode?'app dark':'app'}>
      <Navbar toggleDarkMode={toggleDarkMode}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:movie_id" element={<MovieDetails/>}/>
        <Route path="tv/:series_id" element={<TvDetails/>}/>
        <Route path='tv' element={<Tv/>}/>
        <Route path='watchlist' element={<Watchlist/>}/>
        <Route path='tvWatchlist' element={<TvWatchlist/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='searchtv' element={<SearchTv/>}/>
        <Route path='movie/:movie_id/trailer' element={<Trailer/>}/>
      </Routes>
    </div>
  )
}

export default App
