import React from "react";
import "../scss/style.scss"
import img4 from "../img/MicrosoftTeams-image (18).png"
import img5 from "../img/gallery.png";
import img6 from "../img/MicrosoftTeams-image (14).png";
import img7 from "../img/MicrosoftTeams-image (13).png";
import img8 from "../img/MicrosoftTeams-image (19).png";
import img9 from "../img/MicrosoftTeams-image (15).png";

const Gallery = ()=>{
    return(
    <div class="container-fluid bg-gallery" id="gallery">
    <div class="section-title position-relative text-center section-main" >
        <h6 class="text-uppercase text-primary mb-3 m1-1" >Gallery</h6>
        <h1 class="font-secondary display-4 text-white">Our Photo Gallery</h1>
        <i class="far fa-heart text-white"></i>
    </div>
    <div class="owl-carousel gallery-carousel">
        <div class="gallery-item">
            <img class="img-fluid w-100" src={img6} alt=""/>
            <a href="img/gallery-1.jpg" data-lightbox="gallery">
                <i class="fa fa-2x fa-plus text-white"></i>
            </a>
        </div>
       
        <div class="gallery-item">
            <img class="img-fluid w-100" src={img7} alt=""/>
            <a href="img/gallery-2.jpg" data-lightbox="gallery">
                <i class="fa fa-2x fa-plus text-white"></i>
            </a>
        </div>
       
        <div class="gallery-item">
            <img class="img-fluid w-100" src={img9} alt=""/>
            <a href="img/gallery-3.jpg" data-lightbox="gallery">
                <i class="fa fa-2x fa-plus text-white"></i>
            </a>
        </div>
    </div>
</div>
    )
}
export default Gallery;