import React from "react";
import "../scss/style.scss"
const Navbar = ()=>{
    return (
        <>
  
    <nav class="navbar fixed-top shadow-sm navbar-expand-lg navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="index.html" class="navbar-brand d-block d-lg-none">
            <h1 class="font-secondary text-white mb-n2">Rupanshu <span class="a-1">&</span> Shivani</h1>
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav ml-auto py-0">
                <a href="#home" class="nav-item nav-link active">Home</a>
                <a href="#about" class="nav-item nav-link">About</a>
                <a href="#story" class="nav-item nav-link">Story</a>
                <a href="#gallery" class="nav-item nav-link">Gallery</a>
            </div>
            <a href="index.html" class="navbar-brand mx-5 d-none d-lg-block">
                <h1 class="font-secondary text-white mb-n2">Rupanshu<span class="a-1 ">&</span> Shivani</h1>
            </a>
            <div class="navbar-nav mr-auto py-0">
                <a href="#family" class="nav-item nav-link">Family</a>
                <a href="#event" class="nav-item nav-link">Event</a>
                <a href="#rsvp" class="nav-item nav-link">RSVP</a>
                <a href="#contact" class="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
  
        </>
    )
}
export default Navbar;