import React from "react";
import "../scss/style.scss";

import img5 from "../img/MicrosoftTeams-image (2).png"
import img6 from "../img/MicrosoftTeams-image (12).png"

const AboutModel = ()=>{
 return(

    <div className="container-fluid py-5" id="about">
    <div className="container py-5">
        <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3 m-1" >About</h6>
            <h1 className="font-secondary display-4">Groom & Bride</h1>
            <i className="far fa-heart text-dark"></i>
        </div>
        <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div className="col-md-6 p-0 text-center text-md-right  groom-bride">
                <div className="h-100 d-flex flex-column justify-content-center  p-5">
                    <h3 className="mb-3">The Groom</h3>
                    <p>The Groom is software engineer with exceptional technical skills complemented by a commendable demanor.his proficiency in software development is matched only by his examplary behavior,making him not only a proficient proffessional but also a person of admirable character.</p>

                    <h3 className="font-secondary font-weight-normal text-muted mb-3"><i className="fa fa-male text-primary pr-3"></i>Rupanshu</h3>
                    <div className="position-relative">
                        <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 p-0 p1-1" >
            <img className="img-fluid mr-md-3" src={img5} alt=""/>
            </div>
        </div>
        <div className="row m-0">
            <div className="col-md-6 p-0 p1-1" >
            <img className="img-fluid mr-md-3" src={img6} alt=""/>
            </div>
            <div className="col-md-6 p-0 text-center text-md-left groom-bride">
                <div className="h-100 d-flex flex-column justify-content-center  p-5">
                    <h3 className="mb-3">The Bride</h3>
                    <p>She has not only mastered yoga, but also earned a PhD, showcasing her dedication to both physical and academic pursuits. Additionally, her exemplary behavior and involvement in extracurricular activities further highlight her well-rounded and accomplished nature.</p>
                    <h3 className="font-secondary font-weight-normal text-muted mb-3"><i class="fa fa-female text-primary pr-3"></i>Shivani</h3>
                    <div className="position-relative">
                        <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary btn-square mr-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 )
}
export default AboutModel;