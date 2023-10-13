import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {

    const navigate = useNavigate();

    const navProductDetailsPage = (product) => {
        navigate(`/product-details/${product.idProduct}`);
    }

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",alignItems: "center",flexWrap: "wrap", marginTop: "25px"}}>
            {
                props.products.map((product) => {
                    return (
                        <div className="card shadow" 
                            style={{width: "18rem", margin: "15px", cursor: "pointer"}} 
                            key={product.idProduct}
                            onClick={() => navProductDetailsPage(product)}>

                            <img src={product.images[0].image} className="card-img-top" alt={product.name} />
                            <div className="card-body text-center">
                                <p className="card-text fw-bold">{product.name}</p>
                                <span className="fw-bold fs-3">Price&nbsp;:<span>&nbsp;₹{product.price}</span></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductCard;