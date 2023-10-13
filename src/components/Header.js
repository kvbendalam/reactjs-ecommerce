import React from "react";
import "../css/Header.css";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg header-toolbar">
                <div className="container-fluid">
                    <div className="d-flex flex-column text-center me-5 ms-5">
                        <i className="bi bi-handbag fs-1"></i>
                        <span className="fw-bold">Online Shop</span>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold fs-6" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>

                        <i className="bi bi-cart me-4 fs-4 icon-cursor">
                            <span className="position-absolute top-2 start-2 translate-middle badge rounded-pill bg-danger">0</span>
                        </i>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;