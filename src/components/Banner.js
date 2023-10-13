import React from "react";
import b1 from "../images/banners/banner_1.jpg";
import b2 from "../images/banners/banner_2.jpg";
import b3 from "../images/banners/banner_3.jpg";
import b4 from "../images/banners/banner_4.jpg";

function Banner() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={b1} className="d-block w-100" alt="banner_1"/>
                    </div>
                    <div className="carousel-item">
                        <img src={b2} className="d-block w-100" alt="banner_2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={b3} className="d-block w-100" alt="banner_3"/>
                    </div>
                    <div className="carousel-item">
                        <img src={b4} className="d-block w-100" alt="banner_4"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Banner;