import React, { useEffect, useState } from 'react';
import '../css/ProductDetails.css';
import { useParams } from 'react-router-dom';
import productsList from '../productsList';

/**
 * @description "T-Shirt Product Images"
 */
// import ts1 from "../images/tshirt_p1/ts_1.jpg";
// import ts2 from "../images/tshirt_p1/ts_2.jpg";
// import ts3 from "../images/tshirt_p1/ts_3.jpg";
// import ts4 from "../images/tshirt_p1/ts_4.jpg";
// import ts5 from "../images/tshirt_p1/ts_5.jpg";

function ProductDetails() {
    // let props = {
    //     idProduct: 1,
    //     name: "Polo Neck Half Sleeve Soild Casual Tshirt",
    //     price: 183,
    //     aboutProduct: [
    //         "Care Instructions: Machine Wash",
    //         "Fit Type: Regular Fit",
    //         "Fabric: Cotton Blend; Premium Export Quality Branded T-shirt; Unique Collection to your wardrobe casuals a hit of effortless cool with this best-looking t shirt.",
    //         "Sleeve Type: Half Sleeve; Collar Style: Polo Neck",
    //         "Quality: All garments are subjected to the following tests Fabric dimensional stability test and quality inspection for colours and wash fastness."
    //     ],
    //     images: [
    //         { idImage: 1, image: ts1 },
    //         { idImage: 2, image: ts2 },
    //         { idImage: 3, image: ts3 },
    //         { idImage: 4, image: ts4 },
    //         { idImage: 5, image: ts5 }
    //     ]
    // }

    // use "useState()" for selected Image update in Image Div
    
    const { productId } = useParams();
    const [productImageData, setProductImageData] = useState();
    let selProduct;

    useEffect(() => {
        selProduct = productsList.find((_list) => _list.idProduct === productId);
        setProductImageData(selProduct.images[0].image);
    });
    
    // This function is used to update the selected image data into useState function
    let updateSelProductImage = (selProductImageDetails) => {
        setProductImageData(selProductImageDetails.image);
    };

    return (
        <div>
            <div className="d-flex">
                {/* product Images Container */}
                <div>
                    <div className="d-flex">
                        {/* Product Images */}
                        <div>
                            {
                                selProduct.images.map((pdtImage) => {
                                    return (
                                        <div className="card shadow product_image_div" key={pdtImage.idImage} onClick={() => updateSelProductImage(pdtImage)}>
                                            <img className="product_img" src={pdtImage.image} alt={`Image_${pdtImage.idImage}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* Product selected image */}
                        <div className="card shadow sel-product-image-div">
                            <img className="sel-product-image" src={productImageData} alt="Product Image" />
                        </div>
                    </div>
                    
                    <br/>
                    {/* ADD Cart button */}
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn shadow add-cart-btn">
                            <i class="bi bi-cart-plus fs-3"></i>&nbsp;&nbsp;ADD TO CART
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="product-details-div">
                    {/* Product Name and Price */}
                    <div className="d-flex flex-column">
                        <span className="product-title fs-2">{selProduct.name}</span>
                        <div className='d-flex flex-column'>
                            <span className="fs-5 text-success">Special Price</span>
                            <span className="product-price fs-1">₹{selProduct.price}</span>
                        </div>
                    </div>
                    <br />

                    {/* Product Specifications */}
                    <div>
                        <p className="fs-2 spec-title">Specifications</p>
                        <ul className="product-spec-list">
                            {
                                selProduct.aboutProduct.map((productSpec) => {
                                    return (
                                        <li className="product-spec-li">
                                            <i class="bi bi-bookmark text-primary"></i>&nbsp;{productSpec}
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </div>

            <br/>
        </div>
    );
}

export default ProductDetails;