 import React from "react";
 import "../scss/style.scss"
 const Contact= ()=>{
  return(
    <div className="container-fluid bg-dark pb-1 text-white py-5" id="contact" >
    <div className="container text-center py-5">
        <div className="section-title position-relative text-center">
            <h1 className="font-secondary display-3 text-white">Thank You</h1>
            <i className="far fa-heart text-white"></i>
        </div>
        <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
        </div>
        
      
      
    </div>
</div>
  )
 }
 export default Contact