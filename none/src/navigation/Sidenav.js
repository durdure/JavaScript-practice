import React from 'react'
import './Sidenav.css'

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from './cancel.png'


function Sidenav() {


    const navigate = useNavigate(); 

    function handleLogout() {
        console.log('User logged out!');
        localStorage.removeItem('userToken'); 
        navigate('/login'); 
    }
  return (
    <div className='sidenav'>
       <img className='sidenav__logo' src={logo} alt='logo' />

       <div className='sidenav__buttons'>
            <button className='sidenav__button'>
                <HomeIcon />
                <span>Home</span>
            </button>

            <button className='sidenav__button'>
                <SearchIcon />
                <span>Explore</span>
            </button>

            <button className='sidenav__button'>
                <ExploreIcon />
                <span>Explore</span>  
            </button>

            <button className='sidenav__button'>
                <SlideshowIcon />
                <span>Slideshow</span>    
            </button>


            <button className='sidenav__button'>
                <FavoriteBorderIcon />
                <span>Favorites</span>
            </button>

            <button className='sidenav__button'>
                <AddCircleOutlineIcon />
                <span>Add</span>
            </button>

        </div>
        <button className='sidenav__button' onClick={handleLogout}>
          <LogoutIcon />
          <span>Logout</span>
        </button>
        <div className='sidenav__more'>
            <button className='sidenav__button'>
                <MenuIcon />
                <span>More</span>   
            </button>
        </div>
    </div>

    
  )
}

export default Sidenav