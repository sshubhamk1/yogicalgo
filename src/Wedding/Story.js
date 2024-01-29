import React from "react";
import "../scss/style.scss"
import img4 from "../img/MicrosoftTeams-image (6).png"
import img5 from "../img/MicrosoftTeams-image (5).png";
import img6 from "../img/MicrosoftTeams-image (3).png";
const Story = () =>{
    return (
        <div class="container-fluid py-5" id="story">
        <div class="container pt-5 pb-3">
            <div class="section-title position-relative text-center">
                <h6 class="text-uppercase text-primary mb-3 m-1" >Story</h6>
                <h1 class="font-secondary display-4">Our Love Story</h1>
                <i class="far fa-heart text-dark"></i>
            </div>
            <div class="container timeline position-relative p-0">
                <div class="row">
                    <div class="col-md-6 text-center text-md-right">
                        <img class="img-fluid mr-md-3" src={img4} alt=""/>
                    </div>
                    <div class="col-md-6 text-center text-md-left  groom-bride">
                        <div class="h-100 d-flex flex-column justify-content-center groom-bride p-4 ml-md-3">
                            <h4 class="mb-2">First Meet</h4>
                            <p class="text-uppercase mb-2">01 Jan 2050</p>
                            <p class="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-center text-md-right  groom-bride">
                        <div class="h-100 d-flex flex-column justify-content-center  groom-bride p-4 mr-md-3">
                            <h4 class="mb-2">First Date</h4>
                            <p class="text-uppercase mb-2">01 Jan 2050</p>
                            <p class="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                    <div class="col-md-6 text-center text-md-left">
                        <img class="img-fluid ml-md-3" src={img5} alt=""/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-center text-md-right">
                        <img class="img-fluid mr-md-3" src={img6} alt=""/>
                    </div>
                    <div class="col-md-6 text-center text-md-left  groom-bride">
                        <div class="h-100 d-flex flex-column justify-content-center  groom-bride p-4 ml-md-3">
                            <h4 class="mb-2">Proposal</h4>
                            <p class="text-uppercase mb-2">01 Jan 2050</p>
                            <p class="m-0">Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est dolor elitr.</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default Story;