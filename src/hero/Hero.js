import React from "react";
import './Hero.sass';
import Nav from '../nav/Nav';
import cartImage from '../images/cart.png'

function Hero() {
    return (

        <div className="hero">
            <Nav />

            <div className="row-hero">
                <div className="col-md-6"></div>
                <div className="col-md-5">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Looking for good products?</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">we've got you covered</h6>
                    <img src={cartImage} alt="" />
                    <div>
                        
                    <input type="text"  className="form-control" placeholder="Enter product name"/>
                    </div>
                    <br />
                    <div>
                    <input type="text" className="form-control" placeholder="Enter your budget"/>
                    </div>
                    
                    <button className="btn-primary">Get Started</button>

                </div>
                <div className="col-"></div>
            </div>
                </div>
            </div>

            

        </div>
    )
}
export default Hero;