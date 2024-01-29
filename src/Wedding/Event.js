import React from "react";
import "../scss/style.scss"
const Event = () =>{
 return(
    <div className="container-fluid py-5" id="event">
    <div class="container py-5">
        <div class="section-title position-relative text-center">
            <h6 class="text-uppercase text-primary mb-3 m-1" >Event</h6>
            <h1 class="font-secondary display-4">Our Wedding Event</h1>
            <i class="far fa-heart text-dark"></i>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <h5 class="font-weight-normal text-muted mb-3 pb-3">We solicit your gracious presence at the wedding </h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 border-right border-primary">
                <div class="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                    <img class="img-fluid mb-4" src="img/event-1.jpg" alt=""/>
                    <h4 class="mb-3">The Mayra Bhaat</h4>
                    <p class="mb-2">Rosewell Garden ,Roche Harbor</p>
                    <p class="mb-0">February 03,2024 02:00 P.M</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center text-md-left ml-md-3">
                    <img class="img-fluid mb-4" src="img/event-2.jpg" alt=""/>
                    <h4 class="mb-3">Wedding Party</h4>
                    <p class="mb-2">February 04,2024</p>
                    <p class="mb-2">Rosewell Garden ,Roche Harbor</p>
                    <p class="mb-0">5:00 PM </p>
                </div>
            </div>
        </div>
    </div>
</div>
 )
}
export default Event;