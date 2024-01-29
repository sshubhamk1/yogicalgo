import React from "react";
import "../scss/style.scss"
import  img1 from "../img/MicrosoftTeams-image.png";



const Carouseal = ()=>{
    return(
        <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item position-relative active pc-1" >
                    <img className="img1" src={img1} alt="img"/>
                    <div className="carousel-caption d-flex flex-column carsuel align-items-center justify-content-center">
                        <div className="p-3 pb-1">
                            <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Rupanshu & Shivani</h1>
                            <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                                <h3 className="text-uppercase font-weight-normal text-white m-0" >We're getting married</h3>
                            </div>
                            <button type="button" className="btn-play mx-auto" data-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
    </div>
    )
}
export default Carouseal;